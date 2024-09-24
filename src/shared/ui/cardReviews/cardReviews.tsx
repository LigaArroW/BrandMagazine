import Image from "next/image";

interface IPropsCardReviews {
    image?: string;
    name: string;
    titleProduct: string;
    desc: string;
}

export const CardReviews = ({
    image,
    name,
    titleProduct,
    desc
}:IPropsCardReviews) => {
    return (
        <div className="rounded-[9px] w-full max-w-full py-[10px] px-[17px] md:p-[24px] 2xl:p-[32px] bg-white flex flex-col gap-[6px] md:gap-[25px] 2xl:gap-[33px]">
            <div className="flex items-center gap-[9px] md:gap-[23px] 2xl:gap-[30px]">
                <div className="w-full max-w-[54px] h-[54px] md:max-w-[61px] md:h-[61px] 2xl:max-w-[81px] 2xl:h-[81px] rounded-full relative">
                    {image && <Image src={image} alt={name} fill className="object-cover" />}
                </div>
                <div className="flex flex-col gap-[3px] 2xl:gap-[5px]">
                    <div className="text-[12px] 2xl:text-[16p] text-black/70">{name}</div>
                    <div className="text-black 2xl:text-[19px] text-[14px] capitalize">{titleProduct}</div>
                </div>
            </div>
            <p className="text-[11px] md:text-[14px] 2xl:text-[20px] text-[#484f56] leading-[17px] 2xl:leading-[23px] break-words">
                {desc}
            </p>
        </div>
    )
}