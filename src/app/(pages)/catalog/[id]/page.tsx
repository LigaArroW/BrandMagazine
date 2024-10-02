import { getOneProduct, getProducts } from "@/lib/catalog/catalogAction";
import ButtonWithSvg from "@/shared/components/ButtonWithSvg/ButtonWithSvg";

import CatalogImages from "@/shared/components/Catalog/CatalogImages/CatalogImages";

export async function generateStaticParams() {
    const products = await getProducts()
    if (!products || !products.results) return []
    return products.results.map(product => ({ id: product.id.toString() }))
}

export default async function Page({ params }: { params: { id: string } }) {
    const product = await getOneProduct(params.id)
    if (!product) return null

    return (
        <main className="container mt-[38px] md:mt-[62px] lg:mt-[75px] xl:mt-[100px]" >
            <section className="row ">
                <div className="flex flex-col pb-[25px] border-b border-dotted border-[#C9C9C9] gap-[32px] items-center xl:items-start xl:flex-row xl:gap-[50px] xl:pb-[40px] ">
                    <CatalogImages product={product} />
                    <div className="w-full xl:w-1/2 md:max-w-[650px] xl:max-w-full">
                        <div className="justify-between mb-[11px] hidden xl:flex">
                            <p className="font-[700] text-heavyGray text-[12px]">Бренды</p>
                            <ButtonWithSvg
                                href="/catalog"
                                path="/icon/arrow-next.svg"
                                style="cursor-pointer w-[30px] h-[10px]  rotate-180 "

                            />

                        </div>
                        <div className="flex flex-row justify-between xl:flex-col xl:gap-[15px]">
                            <p className="text-[30px] text-heavyGray xl:text-[48px]">{product.name} {product.brand}</p>
                            <div className="whitespace-nowrap relative font-[700]">
                                {/* {disco ?
                                    (
                                        <p className="text-[30px] text-heavyGray xl:text-[48px]">{new Intl.NumberFormat().format(Number(product.price))} p</p>
                                    ) : (
                                        <p className={`${disco && 'line-through'}`}>{new Intl.NumberFormat().format(Number(product.price))} p</p>
                                    )} */}

                                <p className={`line-through text-[12px] text-[#A8A8A8] ${product.discounted_price ? ' block' : 'hidden'}`}>{product.price} &#8381;</p>
                                <p className={`text-heavyGray text-[18px]`}>{product.discounted_price ? product.discounted_price : product.price} &#8381;</p>

                            </div>
                        </div>
                        <div className="flex flex-col gap-[16px] mb-[23px] xl:mb-[20xp]">
                            <p className="text-middleGray uppercase font-[700] 
                            text-[12px]">Бренд: <span
                                    className="text-heavyGray text-[15px]"
                                >{product.brand}</span></p>
                            <p className="text-middleGray uppercase font-[700] 
                            text-[12px]">Цвет: <span
                                    className="text-heavyGray text-[15px]"
                                >{product.color}</span></p>
                            <p className="text-middleGray uppercase font-[700] 
                            text-[12px]
                            ">Размер</p>
                            <div className="flex gap-[8px]">
                                {
                                    product.sizes && product.sizes.map(size => (
                                        <div key={size.quantity}
                                            className={`uppercase p-[8px] border w-fit text-black text-[15px] xl:text-[12px] 2xl:text-[16px] bg-white ${size.quantity ? "cursor-none bg-heavyGray" : "cursor-pointer"}`}>{size.size}</div>
                                    ))
                                }
                            </div>
                        </div>



                    </div>

                </div>
            </section>
        </main >
    )

}