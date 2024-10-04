'use client'
import { Icon } from "@/shared/ui/icon";
import { IProduct } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

interface ICardProduct {
    product: IProduct
}

const CardProduct: React.FC<ICardProduct> = ({ product }) => {
    return (
        <div className="w-full h-full flex flex-col gap-[13px]">
            <div className="relative h-5/6">
                <Link
                    href={`/catalog/${product.id}`}>
                    <Image
                        src={product.main_image.startsWith('http') ? product.main_image : process.env.NEXT_PUBLIC_BACKEND_URL + `${product.main_image}`}
                        alt={product.name}
                        width={300}
                        height={300}
                        className=" object-cover h-full w-full cursor-pointer"
                    />
                </Link>
                <div className="absolute flex items-center justify-center bg-white right-0 bottom-0  border border-primary w-[45px] h-[45px]">
                    <Icon
                        src="/icon/heart.svg"
                        className="w-[17px] h-[15px] "
                        fill="#C6AD8F"
                    />
                </div>
            </div>
            <p className="text-[8px] mt-auto text-gray-950/70 md:text-[14px] lg-text-[13px] xl:text-[17px]">Артикул: {product.article}</p>
            <div className="flex items-center justify-between text-[9px] text-black md:text-[16px] lg-text-[15px] xl:text-[20px]">
                <p>{product.name} {product.brand}</p>
                <p className="whitespace-nowrap">{new Intl.NumberFormat().format(Number(product.price))} p</p>
            </div>
        </div>

    );
};

export default CardProduct;