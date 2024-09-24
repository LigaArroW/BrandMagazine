import { CardProduct } from "@/shared/ui/cardProduct"
import { recommendationsData } from "./consts"

export const Recommendations = () => {
    return (
        <div className="py-[30px] md:py-[41px] xl:py-[55px] 2xl:pt-[75px] border-t border-dashed border-[#c9c9c9]">
            <div className="mb-[42px] xl:mb-[54px] 2xl:mb-[73px] uppercase text-[20px] md:text-[24px] 2xl:text-[32px] leading-[24px] 2xl:leading-[32px] font-semibold text-[#484f56]">ВАс также может заинтересовать</div>
            <div className="grid gap-[10px] grid-cols-2 lg:grid-cols-4 xl:gap-[49px] 2xl:gap-[64px]">
                {recommendationsData.map((item, index) => (
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
        </div>
    )
}