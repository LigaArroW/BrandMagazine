import { getOneProduct } from "@/lib/catalog/catalogAction";
import CatalogImages from "@/shared/components/Catalog/CatalogImages/CatalogImages";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
    const product = await getOneProduct(params.id)
    if (!product) return null


    return (
        <main className="container mt-[38px] md:mt-[62px] lg:mt-[75px] xl:mt-[100px]" >
            <section className="row flex flex-col gap-[32px] xl:flex-row xl:gap-[50px]">
                <CatalogImages product={product} />
                <div className="w-full xl:w-1/2">
                    

                </div>
            </section>
        </main>
    )

}