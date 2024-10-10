import CatalogProvider from "@/shared/components/Contex/CatalogProvider";
import NewProductsList from "./NewProductsList";

export default async function NewProducts() {
    return (
        <CatalogProvider>
            <NewProductsList/>
        </CatalogProvider>
    )
}