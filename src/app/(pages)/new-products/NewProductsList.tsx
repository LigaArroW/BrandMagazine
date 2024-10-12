"use client";

import { useEffect, useState } from "react";
import Pagination from 'react-paginate';
import queryString from "query-string";
import { getProducts } from "@/lib/catalog/catalogAction";
import { IResponseProducts } from "@/types/product";
import CardProduct from "@/shared/components/CardProduct/CardProduct";
import { useCatalogContext } from "@/shared/components/Contex/CatalogProvider";

export default function NewProductsList() {

    const limit = 16

    const { filter, setFilter } = useCatalogContext();

    const [newProducts, setNewProducts] = useState<IResponseProducts>(
        {} as IResponseProducts
    );
    const [totalPages, setTotalPages] = useState(0);

    const loadProducts = async () => {
        const qu = queryString.stringify({...filter, 
            ordering: '-created_at',
            limit: limit
        }, {
            skipEmptyString: true,
            skipNull: true
        });
        const newProductsData = await getProducts(qu);

        if (!newProductsData) return
        setNewProducts(newProductsData);

        setTotalPages(Math.ceil(newProductsData.count / limit) - 1);
    }

    useEffect(() => {
        loadProducts();
    }, [filter]);

    return (
        <div className="page">
            <div className="container">
                <div className="row">
                  <div className="page__title">Новинки</div>
                    <div className="grid grid-cols-2  gap-x-[61px] gap-y-[42px] lg:grid-cols-4 mb-[50px]">
                        {newProducts && newProducts.results && newProducts.results.map((newProduct) => (
                            <CardProduct
                                key={newProduct.id}
                                product={newProduct}
                            />
                        ))}
                    </div>
                    <div className="w-full flex justify-between items-center gap-24 mb-[56px] md:justify-center">
                        <Pagination
                            pageCount={totalPages}
                            pageRangeDisplayed={2}
                            previousLabel={null}
                            nextLabel={null}
                            activeClassName="active-page"
                            onPageChange={(page) => setFilter({ ...filter, offset: (page.selected + 1) * limit })}
                            className="flex gap-[52px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}