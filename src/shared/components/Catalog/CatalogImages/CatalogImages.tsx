'use client';
import Image from "next/image";
import { IFullProduct } from "@/types/product";
import { useState } from "react";
import Portal from "../../Modals/Portal";
import { Icon } from "@/shared/ui/icon";
import { useRouter } from "next/navigation";


interface ICatalogImages {
    product: IFullProduct
}

const CatalogImages: React.FC<ICatalogImages> = ({ product }) => {
    const router = useRouter();

    return (
        <div className="w-full flex flex-col-reverse xl:w-1/2 xl:flex-row gap-[20px] " >
            <div className="flex flex-row gap-[15px] xl:flex-col xl:gap-[20px]">
                {product.other_images.map((image, index) => (

                    <Image
                        src={image.image}
                        alt={'Миниатюра'}
                        key={index}
                        width={100}
                        height={100}
                        className="size-[89px] object-cover object-center"
                    />

                ))}
            </div>
            <div className="relative">
                <Image
                    src={product.main_image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className=" w-[380px] h-[428px] object-contain object-center md:w-[650px] md:h-[730px] xl:w-[520px] xl:h-[570px] 2xl:w-[690px] 2xl:h-[780px]"
                />
                <Icon
                    src="/icon/arrow-next.svg"
                    fill="#ADB5BD"
                    className="cursor-pointer w-[102px] h-[52px] absolute left-[23px] top-[21px] rotate-180 "
                    onClick={() => router.push('/catalog')}
                />
            </div>
        </div>
    );
};

export default CatalogImages;