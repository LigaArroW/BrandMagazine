import { getOneProduct, getProducts } from "@/lib/catalog/catalogAction";
import AddCartFavorite from "@/shared/components/AddCartFavorite/AddCartFavorite";
import ButtonWithSvg from "@/shared/components/ButtonWithSvg/ButtonWithSvg";

import CatalogImages from "@/shared/components/Catalog/CatalogImages/CatalogImages";
import PaymentAndDelivery from "@/shared/components/PaymentAndDelivery/PaymentAndDelivery";
import RecomendedProducts from "@/shared/components/RecomendedProducts/RecomendedProducts";

export async function generateStaticParams() {
    const products = await getProducts()
    if (!products || !products.results) return []
    return products.results.map(product => ({ id: product.id.toString() }))
}

export default async function Page({ params }: { params: { id: string } }) {
    const product = await getOneProduct(params.id)
    // const [checkColor, setCheckColor] = useState('')
    // const [checkSize, setCheckSize] = useState('')
    if (!product) return null
    console.log("🚀 ~ Page ~ product:", product.sizes)

    return (
        <main className="container mt-[38px] md:mt-[62px] lg:mt-[75px] xl:mt-[100px]" >
            <section className="row ">
                <div className="flex flex-col mb-[21px] pb-[25px] border-b-4 border-dotted border-[#C9C9C9] gap-[32px] items-center md:mb-[42px] 2xl:mb-[56px] xl:items-start xl:flex-row xl:gap-[50px] xl:pb-[40px] ">
                    <CatalogImages product={product} />
                    <div className="w-full xl:w-1/2  md:max-w-[650px] xl:max-w-full ">
                        <div className="justify-start items-center gap-4 mb-[11px] hidden xl:flex">
                            <ButtonWithSvg
                                href="/catalog"
                                path="/icon/arrow-next.svg"
                                style="cursor-pointer w-[38px] h-[14px] rotate-180 "
                            />
                            <p className="font-[700] text-heavyGray text-[16px]">Бренды</p>

                        </div>
                        <div className="flex flex-row justify-between mb-[17px] xl:flex-col xl:gap-[15px]">
                            <p className="text-[30px] text-heavyGray xl:text-[48px]">{product.name} {product.brand}</p>
                            <div className="whitespace-nowrap relative font-[700]">
                                <p className={`line-through text-[12px] text-[#A8A8A8] ${product.discounted_price ? ' block' : 'hidden'}`}>{product.price} &#8381;</p>
                                <p className={`text-heavyGray text-[18px]`}>{product.discounted_price ? product.discounted_price : product.price} &#8381;</p>

                            </div>
                        </div>
                        <div className="flex flex-col gap-[16px] mb-[23px] xl:mb-[20xp]">
                            <p className="text-middleGray uppercase font-[700]
                            text-[12px]">Бренд: <span
                                    className="text-heavyGray text-[15px]"
                                >{product.brand}</span></p>
                            {product?.color &&
                                <p className="text-middleGray uppercase font-[700]
                                text-[12px]">Цвет: <span
                                        className="text-heavyGray text-[15px]"
                                    >{product.color}</span></p>
                            }
                            {product?.sizes?.length > 1 &&
                                <>
                                    <p className="text-middleGray select-none uppercase font-[700]
                                    text-[12px]
                                    ">Размер</p>
                                    <div className="flex gap-[8px]">
                                        {
                                            product.sizes && product.sizes.filter(size => size.size && size.size.name).map(size => (
                                                <div key={size.quantity}
                                                    className={`uppercase p-[8px] border w-fit text-black text-[15px] xl:text-[12px] 2xl:text-[16px] bg-white ${size.quantity ? "cursor-pointer bg-heavyGray" : "cursor-default"}`}>
                                                    {size.size.name}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </>
                            }
                        </div>

                        <AddCartFavorite id={params.id} product={product} />
                        <div className="flex flex-col gap-[24px] xl:gap-4 2xl:gap-7">
                            <p className="uppercase font-[700] text-middleGray text-[12px] xl:text-[9px] 2xl:text-[14px]">Описание:</p>
                            <p className="text-[15px] text-heavyGray 2xl:text-[18px]">{product.description}</p>
                        </div>
                    </div>

                </div>
                <PaymentAndDelivery />
                <RecomendedProducts id={[Number(params.id)]} />
            </section>
        </main >
    )

}