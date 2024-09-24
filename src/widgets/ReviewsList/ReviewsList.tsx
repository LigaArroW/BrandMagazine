import { CardReviews } from "@/shared/ui/cardReviews"
import { reviewsData } from "./consts"

export const ReviewsList = () => {
    return (
        <div className="pb-[25px] xl:pb-[40px] grid grid-cols-1 gap-[21px] md:gap-[34px] md:grid-cols-2 lg:grid-cols-4 lg:gap-x-[7px] lg:gap-y-[32px] 2xl:gap-x-[10px] 2xl:gap-y-[44px]">
            {reviewsData.map((item, index) => (
                <CardReviews
                    key={index}
                    name={item.name}
                    desc={item.desc}
                    titleProduct={item.titleProduct}
                    image={item.image}
                />
            ))}
        </div>
    )
}