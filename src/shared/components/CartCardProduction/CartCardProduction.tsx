'use client'
import { ICart } from "@/types/cart";
import Image from "next/image"
import { useMainContext } from "../Contex/MainProvider";


interface ICartCardProduction {
    item: ICart
}
const CartCardProduction: React.FC<ICartCardProduction> = ({ item }) => {
    const { setCartLS } = useMainContext()
    return (
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
                        <p className="text-[#000000A8] text-[10px] 2xl:text-[12px]">{item.color}{item.size ? `/ ${item.size}` : ''}</p>
                    </div>
                    <p className="text-heavyGray text-[12px]">({item.quantity})</p>
                </div>


            </div>
            <div className="mt-3 flex flex-col justify-between">
                <button
                    type="button"
                    className="underline underline-offset-2 text-black text-[10px] 2xl:text-[12px]"
                    onClick={() => {
                        setCartLS(item, true)
                    }}
                >Удалить</button>
                <p className="text-black whitespace-nowrap text-[10px] 2xl:text-[12px]">{new Intl.NumberFormat().format(Number(item.product.price))} р</p>
            </div>
        </li>
    );
};

export default CartCardProduction;