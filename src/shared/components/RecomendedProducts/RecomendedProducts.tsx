'use client'

import { getRecommendedProducts, IRecomendedProducts } from "@/lib/catalog/catalogAction";
import CardProduct from "../CardProduct/CardProduct";
import { useEffect, useState } from "react";
import { useMainContext } from "../Contex/MainProvider";

interface IRecomendedProductsProps {
    id: number[]
    isCart?: boolean
}


const RecomendedProducts: React.FC<IRecomendedProductsProps> = ({ id, isCart = false }) => {
    const { cart } = useMainContext()

    const [recomendedProducts, setRecomendedProducts] = useState<IRecomendedProducts>({ recommended_products: [] })

    useEffect(() => {

        const getData = async () => {
            if (isCart) {
                const ids = cart.map((item) => item.product.id)
                const res = await getRecommendedProducts(ids)
                
                if (res) setRecomendedProducts(res)
            }

            if (!isCart) {
                const res = await getRecommendedProducts(id)
                if (res) setRecomendedProducts(res)
            }
        }

        getData()

    }, [])
    

    return (
        <div className="mb-[25px] md:mb-[68px] xl:mb-[47px] 2xl:mb-[64px]">
            <h4 className="uppercase font-[600] text-2xl 2xl:text-[32px] inline-block text-heavyGray mb-[30px] md:mb-[42px] xl:mb-[49px] 2xl:mb-[67px]">Вас также может заинтересовать</h4>
            <div className="grid gap-[45px] grid-cols-2 xl:grid-cols-4 ">
                {recomendedProducts && recomendedProducts.recommended_products.map((product, index) => {
                    return (
                        <div className={`${index > 1 ? "hidden xl:block" : ""}`} key={product.id}>
                            <CardProduct product={product} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default RecomendedProducts;