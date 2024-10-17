'use client'

import CardProduct from "@/shared/components/CardProduct/CardProduct"
import { useMainContext } from "@/shared/components/Contex/MainProvider"
import DeliveryOptions from "@/shared/components/DeliveryOptions/DeliveryOptions"
import { Icon } from "@/shared/ui/icon"
import Link from "next/link"

export default function YourCartPage() {
    const { cart, setCartLS } = useMainContext()

    const summ = () => {
        let summ = 0
        cart.forEach(item => {
            summ += Number(item.product.price) * Number(item.quantity)
        })
        return new Intl.NumberFormat().format(Number(summ))
    }

    return (
        <div className="bor-dot flex flex-col gap-[19px] xl:flex-row pb-[22px] md:pb-[40px] md:gap-[36px] xl:gap-[100px] 2xl:gap-[150px] xl:pb-[44px] 2xl:pb-[60px] mb-[21px] md:mb-[42px] 2xl:mb-[56px]">
            <div className="grid grid-cols-2 w-full bor-dot pb-[22px] xl:w-1/2 xl:pb-0 xl:border-0 gap-[10px] md:gap-[25px] 2xl:gap-[34px]">
                {cart.map((item) => (
                    <div key={item.product.id} className="flex items-start gap-[7px] md:gap-[13px] 2xl:gap-[18px]">
                        <CardProduct product={item.product} />
                        <div className="flex flex-col items-center gap-[30px] md:gap-[51px] 2xl:gap-[68px]">
                            <button type="button" className="cursor-pointer relative size-[10px] md:size-[14px] 2xl:size-[20px]"
                                onClick={() => setCartLS({ product: item.product, quantity: 0, color: item.color }, true)}
                            >
                                <span className="absolute bottom-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-[#5E5E5E] rotate-45" />
                                <span className="absolute bottom-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-[#5E5E5E] -rotate-45" />
                            </button>
                            <div className="flex flex-col gap-[5px] md:gap-[9px] xl:gap-[15px]">
                                {item.size && <p className="text-black uppercase text-[6px] md:text-[10px] 2xl:text-[14px]">{item.size}</p>}
                                {/* {item.color && <div className="size-[19px] xl:size-[15px] 2xl:size-[20px] bg-white border border-[#8A8A8A]" />} */}
                                <div className="flex flex-col items-center  border border-[#8A8A8A]">
                                    <div className="">
                                        <Icon
                                            src="/icon/minus.svg"
                                            fill="#484f56"
                                            onClick={() => {
                                                if (item.quantity > 1) {
                                                    // setQuantity(prev => prev - 1)
                                                    setCartLS({ product: item.product, quantity: item.quantity - 1, color: item.color })
                                                }
                                            }}
                                            className={`cursor-pointer size-[19px] xl:size-[15px] 2xl:size-[20px] border-b border-[#8A8A8A]`}
                                        />
                                    </div>
                                    <p className="select-none ">{item.quantity}</p>
                                    <div className="">
                                        <Icon
                                            src="/icon/plus.svg"
                                            fill="#484f56"
                                            onClick={() => setCartLS({ product: item.product, quantity: item.quantity + 1, color: item.color })}
                                            className={`cursor-pointer size-[19px] xl:size-[15px] 2xl:size-[20px] border-t border-[#8A8A8A]`}
                                        />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-[24px] w-full xl:w-1/2">
                <div className="flex bor-dot flex-col gap-5 pb-7 md:gap-6 md:pb-6 xl:pb-4 xl:gap-5 2xl:pb-6 2xl:gap-6">
                    <h5 className="uppercase text-black font-[700] text-base  xl:text-xs 2xl:text-base">Сумма заказов</h5>
                    <ul className="flex flex-col gap-3 w-1/2">
                        {cart.map((item) => (
                            <li key={item.product.id} className="flex justify-between text-black text-xs xl:text-[9px] 2xl:text-[18px] pb-2 tracking-[0.02em]">
                                <div className="text-nowrap">
                                    {item.product.name} {item.product.brand}
                                </div>
                                <div className="text-nowrap">
                                    {new Intl.NumberFormat().format(Number(item.product.price))} р
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <DeliveryOptions />
                <div className="flex w-1/2 xl:w-1/4 justify-between text-base xl:text-sm 2xl:text-base">
                    <p className="uppercase font-[700] text-black">итого</p>
                    <p className="font-[900] whitespace-nowrap text-heavyGray">{summ()} р</p>
                </div>
                <Link href={'/cart/payment-and-delivery'}
                    className="w-full xl:w-1/2 py-3 px-12 text-white bg-primary whitespace-nowrap uppercase font-[700] text-[12px] xl:text-[9px] 2xl:text-[12px] text-center"
                >
                    Перейти к оплате и доставке
                </Link>
            </div>


        </div>
    )
}