'use client';
import { useState } from "react";
import { useMainContext } from "../Contex/MainProvider";
import { Icon } from "@/shared/ui/icon";
import { useRouter } from "next/navigation";
import { addToFavorite, removeFromFavorite } from "@/lib/favorite/favoriteAction";
import { IFullProduct } from "@/types/product";

interface IAddCartFavorite {
    id: string
    product: IFullProduct
}

const AddCartFavorite: React.FC<IAddCartFavorite> = ({ id, product }) => {
    const { accessToken, favorites, updFavorites, cart, setCartLS } = useMainContext()

    const [quantity, setQuantity] = useState(cart.find((item) => item.product.id === Number(id))?.quantity || 1)

    const router = useRouter()

    const handleClickCart = () => {

        const findProductToCart = cart.find((item) => item.product.id === Number(id)) || null
        if (findProductToCart) {
            return
        }

        setCartLS({
            product: { id: Number(id), ...product },
            quantity: quantity,
            color: product.color,
        })

        // setCart(prev => [...prev, {
        //     product: { id: Number(id), ...product },
        //     quantity: quantity,
        //     color: product.color,
        // }])

    }

    const handleClickFavorite = async () => {
        if (!accessToken) {
            return router.push('/auth')
        }
        const add = await addToFavorite(id, accessToken)

        if (add && !('detail' in add)) {
            await updFavorites()
            return
        }

        const del = await removeFromFavorite(id, accessToken)
        if (del) {
            await updFavorites()
        }
    }

    const handleClickBuy = () => {
        if (!accessToken) {
            return router.push('/auth')
        }
    }

    return (
        <div className="flex gap-[4px] items-center mb-[22px] xl:mb-[28px]  md:gap-[14px] xl:gap-[11px] flex-wrap pb-[25px] md:pb-[37px] lg:pb-[37px] xl:pb-[31px] 2xl:pb-[42px] border-b-4 border-dotted border-[#C9C9C9]">
            <div className="flex gap-[6px] xl:gap-[5px] 2xl:gap-0">
                <div className="flex gap-[10px] items-center border-[5px] border-secondary rounded-l-md bg-white">
                    <div className="px-[3px] py-[7px]">
                        <Icon
                            src="/icon/minus.svg"
                            fill="#484f56"
                            onClick={() => {
                                if (quantity > 1) {
                                    setQuantity(prev => prev - 1)
                                }
                            }}
                            className={`cursor-pointer size-[19px] xl:size-[15px] 2xl:size-[20px] border-r border-heavyGray`}
                        />
                    </div>
                    <p className="select-none">{quantity}</p>
                    <div className="px-[3px] py-[7px]">
                        <Icon
                            src="/icon/plus.svg"
                            fill="#484f56"
                            onClick={() => setQuantity(prev => prev + 1)}
                            className={`cursor-pointer size-[19px] xl:size-[15px] 2xl:size-[20px] border-l border-heavyGray`}
                        />
                    </div>


                </div>
                <button type="button"
                    className="uppercase select-none px-[32px] py-[14px] bg-secondary text-white
                    font-[700] text-[12px]
                    md:px-[48px] md:py-[14px]
                    xl:px-[38px] xl:py-[11px] xl:text-[12px]
                    2xl:px-[50px] 2xl:py-[15px] 2xl:text-[14px]
                    "
                    onClick={handleClickCart}
                >
                    В корзину
                </button>
            </div>
            <button type="button"
                className="hidden select-none bg-lightGray lg:flex items-center py-[12px] px-[18px] xl:py-[10px] xl:px-[14px] 2xl:py-[13px] 2xl:px-[19px]"
                onClick={handleClickBuy}
            >
                <Icon
                    src="/icon/lightning.svg"
                    stroke="black"
                    className="size-[17px] xl:size-[14px] 2xl:size-[18px]"
                />
                <p className="text-nowrap font-[700] text-[#353B41] text-[12px] xl:text-[12px] 2xl:text-[14px]">Купить в один клик</p>
            </button>
            <button type="button"
                className="flex relative select-none bg-primary items-center py-[12px] px-[18px] gap-[16px] xl:py-[10px] xl:px-[14px] 2xl:py-[13px] 2xl:px-[19px]"
                onClick={handleClickFavorite}
            >
                <Icon
                    src="/icon/heart.svg"
                    stroke="white"
                    className="size-[14px] xl:size-[11px] 2xl:size-[14px]"
                />
                <p className="text-nowrap font-[700] text-white text-[12px] xl:text-[12px] 2xl:text-[14px]">{favorites.filter(item => item.id === Number(id)).length > 0 ? 'В избранном' : 'Добавить в избранное'}</p>
            </button>

            <button type="button"
                className="flex select-none bg-lightGray lg:hidden w-full justify-center items-center py-[12px] px-[18px] xl:py-[10px] xl:px-[14px] 2xl:py-[13px] 2xl:px-[19px]"
                onClick={handleClickBuy}
            >
                <Icon
                    src="/icon/lightning.svg"
                    stroke="black"
                    className="size-[17px] xl:size-[14px] 2xl:size-[18px]"
                />
                <p className="text-nowrap font-[700] text-[#353B41] text-[12px] xl:text-[10px] 2xl:text-[13px]">Купить в один клик</p>
            </button>

        </div>
    );
};

export default AddCartFavorite;