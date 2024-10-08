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
    const [activePhoto, setActivePhoto] = useState(product.main_image);
    const [showModal, setIsShowModal] = useState(false);


    return (
        <>
            <div className="w-full flex flex-col-reverse xl:w-1/2 xl:flex-row gap-[20px] md:max-w-[650px] xl:max-w-full" >
                <div className="flex flex-row gap-[15px] xl:flex-col flex-wrap xl:gap-[20px]">
                    <Image
                        src={product.main_image}
                        alt={'Миниатюра'}
                        width={100}
                        height={100}
                        className="size-[89px] cursor-pointer object-cover object-center"
                        onClick={() => setActivePhoto(product.main_image)}
                    />
                    {product.other_images.map((image, index) => (

                        <Image
                            src={image.image}
                            alt={'Миниатюра'}
                            key={index}
                            width={100}
                            height={100}
                            className="size-[89px] cursor-pointer object-cover object-center"
                            onClick={() => setActivePhoto(image.image)}
                        />

                    ))}

                </div>
                <div className="relative">
                    <Image
                        src={activePhoto}
                        alt={product.name}
                        width={400}
                        height={400}
                        className=" w-[380px] h-[428px] object-cover object-center cursor-pointer  md:w-[650px] md:h-[730px] xl:w-[520px]  xl:h-[570px] 2xl:w-[690px] 2xl:h-[780px]"
                        onClick={() => setIsShowModal(true)}
                    />
                    <Icon
                        src="/icon/arrow-next.svg"
                        fill="#ADB5BD"
                        className="cursor-pointer w-[102px] h-[52px] absolute left-[23px] top-[21px] rotate-180 xl:hidden"
                        onClick={() => router.push('/catalog')}
                    />
                </div>
            </div>
            {showModal && <Portal>
                <div className="fixed overflow-hidden top-0 left-0 w-full h-full bg-black/50 ">
                    <div className="flex justify-center items-center w-full h-full p-5 bg-white relative">
                        <div className="absolute top-5 right-5">
                            <button type="button" className="cursor-pointer relative size-[20px] md:size-[28px] 2xl:size-[40px]"
                                onClick={() => setIsShowModal(false)}
                            >
                                <span className="absolute bottom-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-[#5E5E5E] rotate-45" />
                                <span className="absolute bottom-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-[#5E5E5E] -rotate-45" />
                            </button>
                        </div>
                        <Image
                            src={activePhoto}
                            alt={product.name}
                            width={400}
                            height={400}
                            className=" w-[90%] h-[90%] object-contain object-center  "
                        // onClick={}
                        />
                    </div>
                </div>
            </Portal>}
        </>
    );
};

export default CatalogImages;