import Image from "next/image"

interface IPropsCardProduct {
    title: string;
    article: string;
    price: string;
    fullPrice?: string;
    image?: string;
}

export const CardProduct = ({
    title,
    article,
    price,
    fullPrice,
    image
}:IPropsCardProduct) => {
    return (
        <div className="flex flex-col gap-[7px] md:gap-[11px] 2xl:gap-[13px] w-full">
            <div className="border border-[#d9d9d9] relative h-[218px] md:h-[356px] xl:h-[329px] 2xl:h-[439px] w-full">
                {image && <Image src={image} alt={title} fill className="object-cover object-top" />}
            </div>
            <div className="flex flex-col gap-[3px] 2xl:gap-[5px]">
                <div className="text-[8px] text-black/70 md:text-[13px] 2xl:text-[16px]">Артикул: {article}</div>
                <div className="flex justify-between relative">
                    <div className="text-[9px] md:text-[15px] capitalize text-black 2xl:text-[19px]">{title}</div>
                    <div className="text-[9px] text-black md:text-[15px] 2xl:text-[19px]">{price} р</div>
                    <div className="absolute text-[6px] md:text-[10px] text-[#a3a3a3] right-0 top-[-6px] md:top-[-12px]">{fullPrice}р</div>
                </div>
            </div>
        </div>
    )
}