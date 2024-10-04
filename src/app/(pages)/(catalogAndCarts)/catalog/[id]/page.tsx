import { getOneProduct, getProducts, getRecommendedProducts } from "@/lib/catalog/catalogAction";
import AddCartFavorite from "@/shared/components/AddCartFavorite/AddCartFavorite";
import ButtonWithSvg from "@/shared/components/ButtonWithSvg/ButtonWithSvg";
import CardProduct from "@/shared/components/CardProduct/CardProduct";

import CatalogImages from "@/shared/components/Catalog/CatalogImages/CatalogImages";

export async function generateStaticParams() {
    const products = await getProducts()
    if (!products || !products.results) return []
    return products.results.map(product => ({ id: product.id.toString() }))
}

export default async function Page({ params }: { params: { id: string } }) {
    const product = await getOneProduct(params.id)
    if (!product) return null
    const recomendedProducts = await getRecommendedProducts(Number(params.id))


    return (
        <main className="container mt-[38px] md:mt-[62px] lg:mt-[75px] xl:mt-[100px]" >
            <section className="row ">
                <div className="flex flex-col mb-[21px] pb-[25px] border-b-4 border-dotted border-[#C9C9C9] gap-[32px] items-center md:mb-[42px] 2xl:mb-[56px] xl:items-start xl:flex-row xl:gap-[50px] xl:pb-[40px] ">
                    <CatalogImages product={product} />
                    <div className="w-full xl:w-1/2  md:max-w-[650px] xl:max-w-full ">
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
                            <p className="text-middleGray select-none uppercase font-[700] 
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

                        <AddCartFavorite id={params.id} />
                        <div className="flex flex-col gap-[24px] xl:gap-4 2xl:gap-7">
                            <p className="uppercase font-[700] text-middleGray text-[12px] xl:text-[9px] 2xl:text-[12px]">Описание:</p>
                            <p className="text-[13px] text-heavyGray 2xl:text-[16px]">{product.description}</p>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col xl:flex-row gap-8 md:gap-[25px] xl:gap-5 mb-[30px]  border-b-4 border-dotted border-[#C9C9C9] pb-[25px] lg:pb-[41px] xl:mb-[56px] md:mb-[41px] 2xl:pb-[56px] 2xl:mb-[75px]">
                    <div className="select-none w-full xl:w-1/2 text-heavyGray flex flex-col gap-6 2xl:gap-[35px]">
                        <h4 className="uppercase font-[600] text-2xl 2xl:text-[32px]">Оплата</h4>
                        <ul className="text-[15px] 2xl:text-[20px]">
                            <li className="">- Наличными или переводом после получения заказа</li>
                        </ul>
                    </div>
                    <div className="w-full xl:w-1/2 text-heavyGray flex flex-col gap-6 2xl:gap-[35px]">
                        <h4 className="uppercase font-[600] text-2xl 2xl:text-[32px]">Доставка</h4>
                        <ul className="text-[15px] 2xl:text-[20px]">
                            <li className="">- Доставка в приделах МКАД бесплатно</li>
                            <li className="">- За МКАД и МО до 2000р</li>
                            <li className="">- По России 100% предоплата, доставка осуществляется через СДЭК</li>
                        </ul>
                    </div>
                </div>
                <div className="mb-[25px] md:mb-[68px] xl:mb-[47px] 2xl:mb-[64px]">
                    <h4 className="uppercase font-[600] text-2xl 2xl:text-[32px] inline-block text-heavyGray mb-[30px] md:mb-[42px] xl:mb-[49px] 2xl:mb-[67px]">Вас также может заинтересовать</h4>
                    <div className="grid gap-[45px] grid-cols-2 xl:grid-cols-4 ">
                        {recomendedProducts && recomendedProducts.recommended_products.map((product, index) => {
                            return (
                                <div className={`${index > 1 ? "hidden xl:block" : ""}`} key={product.id}>
                                    <CardProduct product={product} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </main >
    )

}