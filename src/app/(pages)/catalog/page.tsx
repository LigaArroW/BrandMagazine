import { getColors } from "@/lib/catalog/catalogAction";
import Catalog from "@/shared/components/Catalog/Catalog";
import CatalogProvider from "@/shared/components/Contex/CatalogProvider";
import Filter from "@/shared/components/Filter/Filter";

export default async function CatalogPage() {
    const colors = await getColors()


    return (
        <main className="container mt-[38px] md:mt-[62px] lg:mt-[75px] xl:mt-[100px]">
            <CatalogProvider>
                <section className="row xl:flex xl:gap-[98px] ">
                    <div className="w-1/4 hidden xl:block">
                        <Filter colors={colors} />
                    </div>
                    <div className="w-full xl:w-3/4">
                        <Catalog colors={colors}/>
                    </div>
                </section>


            </CatalogProvider>
        </main>
    )
}