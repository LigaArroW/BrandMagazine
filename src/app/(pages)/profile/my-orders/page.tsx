'use client'

import { getMyOrders } from "@/lib/order/orderAction";
import { useMainContext } from "@/shared/components/Contex/MainProvider";
import { IGetOrders } from "@/types/order";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Icon } from "@/shared/ui/icon";
import Image from "next/image"

export default function MyOrdersPage() {
    const { accessToken } = useMainContext();
    const [orders, setOrders] = useState<IGetOrders[]>([]);
    const [indexAccordion, setIndexAccordion] = useState<number>(0);
    console.log("🚀 ~ MyOrdersPage ~ orders:", orders)


    useEffect(() => {
        const getData = async () => {
            if (!accessToken) return
            const res = await getMyOrders(accessToken);
            console.log("🚀 ~ getData ~ res:", res)
            if (res) setOrders(res);
        }

        getData()
    }, [])

    return (
        <>
            {
                orders.length > 0 && orders.map((order, index) => (
                    <div className={`bor-dot pb-5 md:pb-10 xl:pb-8 2xl:pb-10 pt-5 md:pt-10 xl:pt-8 2xl:pt-10`}>
                        <div className="flex items-center justify-between gap-8 cursor-pointer" onClick={() => setIndexAccordion(index)}>
                            <div className="grid grid-cols-2 grid-rows-2 w-3/4 xl:w-1/2 gap-8 xl:grid-rows-1 xl:grid-cols-4">
                                <div className="flex flex-col items-start gap-3 2xl:gap-4">
                                    <h5 className="text-black uppercase font-[700] text-[12px] 2xl:text-[16px]">Номер заказа</h5>
                                    <p className="text-heavyGray text-[12px] 2xl:text-[16px]">{order.id}</p>
                                </div>
                                <div className="flex flex-col items-start gap-3 2xl:gap-4">
                                    <h5 className="text-black uppercase font-[700] text-[12px] 2xl:text-[16px]">дата заказа</h5>
                                    <p className="text-heavyGray text-[12px] 2xl:text-[16px]">{format(new Date(order.created_at), "dd.mm.yyyy")}</p>
                                </div>
                                <div className="flex flex-col items-start gap-3 2xl:gap-4">
                                    <h5 className="text-black uppercase font-[700] text-[12px] 2xl:text-[16px]">Сумма заказа</h5>
                                    <p className="text-heavyGray text-[12px] 2xl:text-[16px]">{new Intl.NumberFormat().format(Number(order.total_sum))} р</p>
                                </div>
                                <div className="flex flex-col items-start gap-3 2xl:gap-4">
                                    <h5 className="text-black uppercase font-[700] text-[12px] 2xl:text-[16px]">Способ оплаты</h5>
                                    <p className="text-heavyGray text-[12px] 2xl:text-[16px]">Оплата при получении</p>
                                </div>
                            </div>
                            <Icon
                                src="/icon/dropdown-arrow-big.svg"
                                stroke="#1E1E1E"
                                className={`w-7 h-3 2xl:w-8 2xl:h-4 ${index === indexAccordion ? 'rotate-180' : ''}`}
                            />
                        </div>
                        <div className={`mt-6 ${index === indexAccordion ? 'block' : 'hidden'}`}>
                            <div className="flex w-full bg-primary text-white py-2 font-[700] text-[12px] 2xl:text-[16px] uppercase">
                                <p className="w-2/3 lg:w-1/2 pl-14 md:pl-0 md:text-center xl:text-left xl:pl-6">товар</p>
                                <p className="w-1/3 lg:w-1/2 text-center">итого</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="bor-dot w-full flex ">
                                    <div className="w-2/3 lg:w-1/2 border-r-4 border-dotted border-[#C9C9C9] pr-4 pb-5 2xl:pb-9 lg:pr-16 2xl:pr-[104px]">
                                        <ul className="mt-3 grid grid-cols-1 xl:grid-cols-2 gap-5 2xl:mt-7">
                                            {order.items.map((item, index) => (
                                                <li key={item.product.id} className="flex items-stretch gap-2 justify-between">
                                                    <div className="flex gap-3 md:gap-2 2xl:gap-3">
                                                        <Image
                                                            src={item.product.main_image}
                                                            alt={item.product.name}
                                                            width={100}
                                                            height={100}
                                                            className="h-full object-cover"
                                                        />

                                                        <div className="mt-3 flex flex-col justify-between">
                                                            <div className="flex flex-col gap-2">
                                                                <p className="text-black tracking-[0.87px] text-[10px] 2xl:text-[12px]">{item.product.name} {item.product.brand}</p>
                                                                <p className="text-[#000000A8] text-[10px] 2xl:text-[12px]">{item.product.color}{item.size.name ? `/ ${item.size.name}` : ''}</p>
                                                            </div>
                                                            <p className="text-heavyGray text-[12px]">({item.quantity})</p>
                                                        </div>


                                                    </div>
                                                    <div className="mt-3 flex flex-col justify-between">

                                                        <p className="text-black mt-auto whitespace-nowrap text-[10px] 2xl:text-[12px]">{new Intl.NumberFormat().format(Number(item.product.price))} р</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className="w-1/3 lg:w-1/2 flex items-center justify-center">{new Intl.NumberFormat().format(Number(order.total_sum))} р</p>
                                </div>

                                

                            </div>

                        </div>
                    </div>
                ))
            }
        </>
    )
}