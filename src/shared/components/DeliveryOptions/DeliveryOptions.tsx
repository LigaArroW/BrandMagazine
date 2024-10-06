'use client'

import { getDeliveryMethods } from "@/lib/delivery/deliveryAction";
import { IDelivery } from "@/types/delivery";
import { useState, useEffect } from "react";
import { useMainContext } from "../Contex/MainProvider";
import { IOrder } from "@/types/order";
import { createOrder } from "@/lib/order/orderAction";

interface IDeliveryOptions {
    payment?: boolean
}

const DeliveryOptions: React.FC<IDeliveryOptions> = ({ payment = false }) => {
    const { deliveryIndex, setDeliveryIndex, tempUser, cart, accessToken } = useMainContext()
    const [delivery, setDelivery] = useState<IDelivery[]>([])

    useEffect(() => {
        const getData = async () => {
            const res = await getDeliveryMethods()
            if (res) setDelivery(res)
        }

        getData()
    }, [])


    const handleCreateOrder = async () => {
        if (!tempUser || !accessToken) return

        const kk = cart.map(item => ({
            product: item.product.id,
            quantity: item.quantity,

            size: (item.size || item.size === '') ? Number(item.size) : 0,
        }))

        console.log(kk);


        const newOrder: IOrder = {
            delivery_time: tempUser.time || '',
            total_sum: summ(),
            delivery_cost: delivery[deliveryIndex].cost,
            discount: tempUser.promoCode || '0',
            // status: 'new',
            delivery_item: delivery[deliveryIndex].id,
            address: tempUser.address,
            city: tempUser.city,
            email: tempUser.email,
            first_name: tempUser.first_name,
            last_name: tempUser.last_name,
            patronymic: tempUser.patronymic,
            phone_number: tempUser.phone_number,
            id: tempUser.id,
            items: [
                {
                    product: 7,
                    quantity: 4,
                    size: 3
                }
            ]
        }
        // const newOrder: IOrder = {
        //     delivery_time: delivery[deliveryIndex].name,
        //     total_sum: summ(),
        //     delivery_cost: delivery[deliveryIndex].cost,
        //     discount: tempUser.promoCode || '0',
        //     // status: 'new',
        //     delivery_item: delivery[deliveryIndex].id,
        //     address: tempUser.address,
        //     city: tempUser.city,
        //     email: tempUser.email,
        //     first_name: tempUser.first_name,
        //     last_name: tempUser.last_name,
        //     patronymic: tempUser.patronymic,
        //     phone_number: tempUser.phone_number,
        //     id: tempUser.id,
        //     items: cart.map(item => ({
        //         product: item.product.id,
        //         quantity: item.quantity,

        //         size: (item.size || item.size === '') ? item.size : '',
        //     }))
        // }

        const order = await createOrder(newOrder, accessToken)
        console.log("🚀 ~ handleCreateOrder ~ order:", order)

    }


    const summ = () => {
        let summ = 0
        cart.forEach(item => {
            summ += Number(item.product.price) * Number(item.quantity)
        })
        return new Intl.NumberFormat().format(Number(summ))
    }

    return (
        <>
            <div className="flex flex-col bor-dot gap-6 pb-7 md:pb-6 xl:pb-4 xl:gap-4 2xl:gap-6 2xl:pb-6">
                <h5 className="uppercase text-black font-[700] text-base  xl:text-xs 2xl:text-base">Доставка</h5>
                <ul className="flex flex-col gap-6 md:gap-5 xl:gap-3 2xl:gap-4">
                    {delivery.map((item, index) => (
                        <li key={item.id} className="flex cursor-pointer gap-[14px] items-center"
                            onClick={() => setDeliveryIndex(index)}
                        >
                            <p className="size-[14px] inline-block relative border rounded-[50%] border-[#8A8A8A]" >
                                <span className={`absolute size-[10px] rounded-[50%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${deliveryIndex === index ? 'bg-[#8A8A8A]' : 'bg-white'}`} />
                            </p>
                            <p
                                className="text-heavyGray break-words text-sm xl:text-xs 2xl:text-sm"
                            >
                                {item.name}
                                <span className="font-[900]">
                                    {item.name.toLowerCase().includes('индивид') ? '' : (item.cost === '0.00' ? ': бесплатно' : `: ${item.cost} ₽`)}
                                </span>
                            </p>
                        </li>
                    ))}
                </ul>


            </div>
            {payment && (
                <>
                    {tempUser?.promoCode && <div className="bor-dot mt-6 gap-6 pb-7 md:pb-6 xl:pb-4 xl:gap-4 2xl:gap-6 2xl:pb-6">
                        <div className="flex w-2/3 md:w-1/3 xl:w-1/4 justify-between items-center">
                            <h5 className="uppercase text-black font-[700] text-base  xl:text-xs 2xl:text-base">
                                Промокод
                            </h5>
                            <p className="text-heavyGray font-[900] text-[17px] 2xl:text-[22px]">- {new Intl.NumberFormat().format(Number(tempUser?.promoCode))} р</p>
                        </div>
                    </div>}
                    <div className="flex flex-col mt-6 gap-[19px] md:gap-10 xl:gap-6 2xl:gap-8">
                        <div className="flex w-1/2 flex-col lg:flex-row gap-[9px] lg:w-full lg:gap-[30px]">

                            <div className="flex w-full lg:w-1/2 justify-between items-center">
                                <h5 className="uppercase text-black font-[700] text-base  xl:text-xs 2xl:text-base">итого</h5>
                                <p className="text-heavyGray font-[900] text-[15px] 2xl:text-[16px]">{summ()} р</p>
                            </div>
                            <p className="text-heavyGray text-[15px] xl:text-[11px] 2xl:text-[14px]">Оплата при получении*</p>
                        </div>
                        <button className="bg-primary py-4 text-white w-full text-center md:w-1/2 xl:w-1/4 "
                            onClick={handleCreateOrder}
                        >Подтвердить</button>
                    </div>
                </>
            )}
        </>
    );
};

export default DeliveryOptions;