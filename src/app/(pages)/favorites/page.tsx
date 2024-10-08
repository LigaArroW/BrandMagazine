"use client";

import { AboutPayDelivery } from "@/widgets/AboutPayDelivery";
import { favoritesData } from "./consts";
import { CardProduct } from "@/shared/ui/cardProduct";
import RecomendedProducts from "@/shared/components/RecomendedProducts/RecomendedProducts";

export default function Favorites() {
    return (
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="page__title">Избранное</div>
                    <div className="grid grid-cols-2 gap-[10px] md:gap-[49px] lg:grid-cols-4 xl:gap-[47px] 2xl:gap-[77px] mb-[49px] md:mb-[53px] xl:mb-[42px] 2xl:mb-[57px]">
                        {favoritesData.map((item, index) => (
                            <CardProduct 
                                key={index}
                                title={item.title}
                                article={item.article}
                                price={item.price}
                                fullPrice={item.fullPrice}
                                image={item.image}
                            />
                        ))}
                    </div>
                    <AboutPayDelivery />
                    <RecomendedProducts isCart />
                </div>
            </div>
        </div>
    )
}