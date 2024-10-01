'use client';

import { Icon } from "@/shared/ui/icon";
import Link from "next/link";
import { IOrdering, useCatalogContext } from "../Contex/CatalogProvider";
import queryString from "query-string";
import { useEffect, useState } from "react";
import { getProducts } from "@/lib/catalog/catalogAction";
import { IResponseProducts } from "@/types/product";
import CardProduct from "../CardProduct/CardProduct";
import Pagination from 'react-paginate';

import Filter from "../Filter/Filter";
import IconMain, { EIcon } from "../IconMain/IconMain";
import Portal from "../Modals/Portal";

interface ICatalog {
    colors: string[]
}

const Catalog: React.FC<ICatalog> = ({ colors }) => {

    const { filter, setFilter, resetFilter, setPrice } = useCatalogContext();
    const [products, setProducts] = useState<IResponseProducts>({} as IResponseProducts);
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [isModal, setIsModal] = useState(false);



    const loadProducts = async () => {


        const qu = queryString.stringify(filter, {
            skipEmptyString: true,
            skipNull: true,
        });
        const productsData = await getProducts(qu);
        console.log("🚀 ~ loadProducts ~ productsData:", productsData)
        setProducts(productsData);
        if (productsData.max_product_price && productsData.min_product_price) {
            setPrice({
                min: productsData.min_product_price,
                max: productsData.max_product_price,
            })
        }
        setTotalPages(Math.ceil(productsData.count / filter.limit) - 1);
    }

    useEffect(() => {
        loadProducts();

    }, [filter]);



    return (
        <>
            <div className="flex flex-col gap-[19px]">

                <p className="font-[400] text-[14px] xl:text-[18px]">
                    <Link
                        className="cursor-pointer text-heavyGray hover:text-primary"
                        href="/">Главная
                    </Link >
                    <span className="text-black"> / Каталог</span>
                </p >
                <h4 className="title font-[400] text-black">Каталог</h4>
                <div className="flex justify-between items-end mb-[30px]">
                    <div className="cursor-pointer flex gap-[9px] items-center xl:hidden" onClick={() => setIsModal(true)}>
                        <IconMain name={EIcon.Filter} style="size-[17px]" />
                        <p className="font-[700] uppercase text-[14px]">Фильтр</p>

                    </div>
                    <label className="relative hidden xl:block w-1/3 h-[57px] xl:h-[75px] lg:h-[56px] md:h-[60px]">
                        <Icon
                            src="/icon/search.svg"
                            fill="transparent"
                            stroke="black"
                            className="w-[20px] h-[20px] absolute left-2 top-1/2 -translate-y-1/2 "
                        />
                        <input
                            type="text"
                            value={filter.name}
                            placeholder="Поиск"
                            onChange={(e) => setFilter({ ...filter, name: e.target.value })}
                            className="w-full h-full bg-[#D9D9D9] pl-8  placeholder:absolute placeholder:right-10 placeholder:top-1/2 placeholder:-translate-y-1/2  placeholder:text-heavyGray placeholder:font-[400] placeholder:leading-[10px] placeholder:text-center"
                        />
                    </label>
                    <p className="font-[700] hidden xl:block text-heavyGray xl:text-[10px] 2xl:text-[13px] ">
                        Отображение
                        <span className="ml-2">{filter.offset! + 1} - {filter.limit + filter.offset!} ИЗ {products.count}</span>
                    </p>
                    <div className="font-[700]  gap-2 hidden xl:flex text-heavyGray xl:text-[10px] 2xl:text-[13px]">
                        Показать
                        <ul className="flex gap-2">
                            <li
                                className={`cursor-pointer ${filter.limit === 16 && "underline underline-offset-4"}`}
                                onClick={() => setFilter({ ...filter, limit: 16 })}
                            >16</li>
                            <li
                                className={`cursor-pointer ${filter.limit === 32 && "underline underline-offset-4"}`}
                                onClick={() => setFilter({ ...filter, limit: 32 })}
                            >32</li>
                            <li
                                className={`cursor-pointer ${filter.limit === 64 && "underline underline-offset-4"}`}
                                onClick={() => setFilter({ ...filter, limit: 64 })}
                            >64</li>
                        </ul>
                    </div>

                    <div className="uppercase relative pr-[30px] cursor-pointer font-[700] text-heavyGray text-[14px] xl:text-[13px] 2xl:text-[13px] lg:text-[10px] "
                        onClick={() => setIsSortOpen(!isSortOpen)}
                    >
                        <div className="flex gap-4 justify-between items-center">
                            Сортировать по
                            <Icon
                                src="/icon/arrow-up.svg"
                                fill="black"
                                className={`size-[14px] cursor-pointer lg:size-[10px] xl:size-[14px] ${isSortOpen ? "" : "rotate-180"} `}
                            />
                        </div>

                        <ul className={`absolute w-full px-[11px] top-10 bg-white z-10
                        rounded-[4px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] 
                        text-heavyGray text-nowrap
                        font-[400] text-[13px]  md:text-[13px] lg:text-[10px] xl:text-[13px]
                        ${isSortOpen ? "block" : "hidden"}`}>
                            <li
                                className={`cursor-pointer py-[11px] border-b border-dashed border-[#C9C9C9] 
                                ${filter.ordering.includes('total_order_count') && "underline underline-offset-4"}
                                `}
                                onClick={() => { setFilter({ ...filter, ordering: 'total_order_count', offset: null }), setIsSortOpen(false) }}
                            >По популярности
                            </li>
                            <li
                                className={`cursor-pointer py-[11px] border-b border-dashed border-[#C9C9C9] 
                                ${filter.ordering.includes('created_at') && "underline underline-offset-4"}
                                `}
                                onClick={() => { setFilter({ ...filter, ordering: 'created_at', offset: null }), setIsSortOpen(false) }}
                            >По новизне
                            </li>
                            <li
                                className={`cursor-pointer py-[11px] border-b border-dashed border-[#C9C9C9] 
                                ${!filter.ordering.startsWith('-') && "underline underline-offset-4"}
                                `}
                                onClick={() => {
                                    if (!filter.ordering.startsWith('-')) {
                                        setFilter({ ...filter, offset: null, ordering: filter.ordering as IOrdering })
                                    } else {
                                        setFilter({ ...filter, offset: null, ordering: filter.ordering.slice(1) as IOrdering })
                                    }
                                    setIsSortOpen(false)
                                }}
                            >По возрастанию
                            </li>

                            <li
                                className={`cursor-pointer py-[11px] 
                                    ${filter.ordering.startsWith('-') && "underline underline-offset-4"}
                                `}
                                onClick={() => {
                                    if (filter.ordering.startsWith('-')) {
                                        setFilter({ ...filter, ordering: filter.ordering.slice(1) as IOrdering })
                                    } else {
                                        setFilter({ ...filter, ordering: '-' + filter.ordering as IOrdering })
                                    }
                                    setIsSortOpen(false)
                                }}
                            >По убыванию
                            </li>
                        </ul>

                    </div>

                </div>

                <div className="grid grid-cols-2  gap-x-[61px] gap-y-[42px] lg:grid-cols-3 mb-[50px]">

                    {products?.results?.map((product) => (
                        <CardProduct
                            key={product.id}
                            product={product}
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
                        onPageChange={(page) => setFilter({ ...filter, offset: (page.selected + 1) * filter.limit })}
                        className="flex gap-[52px]"

                    />

                    <Icon
                        src="/icon/arrow-next.svg"
                        size={48}
                        fill="#ADB5BD"
                        className={`cursor-pointer ${totalPages < 2 && "hidden"}`}
                        onClick={() => setFilter({ ...filter, offset: (filter.limit as number) * totalPages })}
                    />
                </div>

                {isModal && <Portal>
                    <div className="fixed overflow-auto top-0 left-0 right-0  z-50 bg-white w-full h-full xl:hidden">
                        <div className="p-[60px]">
                            <div className="flex justify-between items-center">
                                <p className="uppercase underline"
                                    onClick={() => resetFilter()}
                                >сбросить</p>
                                <Icon
                                    src="/icon/arrow-next.svg"
                                    fill="#ADB5BD"
                                    className="cursor-pointer w-[102px] h-[52px]"
                                    onClick={() => setIsModal(false)}
                                />
                            </div>
                            <Filter colors={colors} />
                        </div>
                    </div>
                </Portal>}

            </div >


        </>
    );
};

export default Catalog;