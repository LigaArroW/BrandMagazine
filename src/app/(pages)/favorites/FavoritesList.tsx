import { CardProduct } from "@/shared/ui/cardProduct";
import { useMainContext } from "@/shared/components/Contex/MainProvider";
import { useEffect, useState } from "react";
import { getFavorites } from "@/lib/catalog/catalogAction";
import Pagination from 'react-paginate';
import { useCatalogContext } from "@/shared/components/Contex/CatalogProvider";
import queryString from "query-string";

export const FavoritesList = () => {
    const limit = 16;
    const { accessToken } = useMainContext();

    const { filter, setFilter } = useCatalogContext();

    const [favorites, setFavorites] = useState<any[]>([]);
    const [totalPages, setTotalPages] = useState(0);

    const loadProducts = async () => {
        const qu = queryString.stringify({...filter,
            limit: limit
        }, {
            skipEmptyString: true,
            skipNull: true
        });

        const newProductsData = await getFavorites(
            qu, accessToken || ""
        );

        if (!newProductsData) return;

        setFavorites(newProductsData?.results);

        setTotalPages(Math.ceil(newProductsData.count / limit) - 1);
    };

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <>
         <div className="grid grid-cols-2 gap-[10px] md:gap-[49px] lg:grid-cols-4 xl:gap-[47px] 2xl:gap-[77px] mb-[49px] md:mb-[53px] 2xl:mb-[57px]">
                {favorites.map((item, index) => (
                    <CardProduct
                        key={index}
                        title={item.name}
                        article={item.article}
                        price={item.discounted_price || item.price}
                        fullPrice={item.price}
                        image={item.main_image}
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
        </>
    );
};
