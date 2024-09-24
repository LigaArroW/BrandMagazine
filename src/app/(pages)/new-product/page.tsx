"use client";

import { CardProduct } from "@/shared/ui/cardProduct";
import { newProductData } from "./consts";
import { NavigationBottom } from "@/widgets/navigationBottom";

export default function NewProduct() {
    return (
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="page__title">Новинки</div>
                    <div className="grid grid-cols-2 gap-x-[10px] gap-y-[23px] md:gap-x-[49px] md:gap-y-[32px] lg:grid-cols-4 xl:gap-x-[48px] xl:gap-y-[64px] 2xl:gap-x-[64px] 2xl:gap-y-[87px] mb-[39px] md:mb-[75px] xl:mb-[50px] 2xl:mb-[68px]">
                        {newProductData.map((item, index) => (
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
                    <NavigationBottom />
                </div>
            </div>
        </div>
    )
}