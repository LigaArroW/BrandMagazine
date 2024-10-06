'use client'

import CartCardProduction from "@/shared/components/CartCardProduction/CartCardProduction"
import { useMainContext } from "@/shared/components/Contex/MainProvider"
import DeliveryOptions from "@/shared/components/DeliveryOptions/DeliveryOptions"
import PaymentInputs from "@/shared/components/PaymentInputs/PaymentInputs"
import Image from "next/image"
import Link from "next/link"


export default function PaymentCartPage() {
    const { user, cart, setCartLS } = useMainContext()

    return (
        <div className="bor-dot flex flex-col-reverse gap-[19px] xl:flex-row pb-[22px] md:pb-[40px] md:gap-[36px] xl:gap-[100px] 2xl:gap-[150px] xl:pb-[44px] 2xl:pb-[60px] mb-[21px] md:mb-[42px] 2xl:mb-[56px]">

            <PaymentInputs />
            <div className="w-full xl:w-1/2">
                <div className="flex flex-col gap-[13px] xl:bor-dot mb-6 md:mb-9 xl:mb-7 xl:pb-[19px] 2xl:mb-9 2xl:pb-6">
                    <div className="flex items-center gap-3">
                        <h5 className="uppercase text-black font-[700] text-base  xl:text-xs 2xl:text-base">
                            ВАШ ЗАКАЗ
                        </h5>
                        {cart.length > 0 && <p className="text-secondary text-[12px] xl:text-[10px] 2xl:text-[14px]">({cart.length})</p>}
                    </div>

                    <ul className="w-full xl:w-3/4 grid grid-cols-1 xl:grid-cols-2 gap-3 md:gap-5 xl:gap-4 2xl:gap-6">
                        {cart.map((item) => (
                            <CartCardProduction key={item.product.id} item={item} />
                            // <li key={item.product.id} className="flex items-stretch gap-2 justify-between">
                            //     <div className="flex gap-3 md:gap-2 2xl:gap-3">
                            //         <Image
                            //             src={item.product.main_image}
                            //             alt={item.product.name}
                            //             width={100}
                            //             height={100}
                            //             className="h-full object-cover"
                            //         />

                            //         <div className="mt-3 flex flex-col justify-between">
                            //             <div className="flex flex-col gap-2">
                            //                 <p className="text-black tracking-[0.87px] text-[10px] 2xl:text-[12px]">{item.product.name} {item.product.brand}</p>
                            //                 <p className="text-[#000000A8] text-[10px] 2xl:text-[12px]">{item.color}{item.size ? `/ ${item.size}` : ''}</p>
                            //             </div>
                            //             <p className="text-heavyGray text-[12px]">({item.quantity})</p>
                            //         </div>


                            //     </div>
                            //     <div className="mt-3 flex flex-col justify-between">
                            //         <button
                            //             type="button"
                            //             className="underline underline-offset-2 text-black text-[10px] 2xl:text-[12px]"
                            //             onClick={() => {
                            //                 setCartLS(item, true)
                            //             }}
                            //         >Удалить</button>
                            //         <p className="text-black whitespace-nowrap text-[10px] 2xl:text-[12px]">{new Intl.NumberFormat().format(Number(item.product.price))} р</p>
                            //     </div>
                            // </li>


                        ))}



                    </ul>



                </div>
                <div className="hidden xl:block">
                    <DeliveryOptions payment />
                </div>

            </div>



        </div >
    )
}