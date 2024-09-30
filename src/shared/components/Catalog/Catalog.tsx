'use client';

import { Icon } from "@/shared/ui/icon";
import Link from "next/link";
import { IOrdering, useCatalogContext } from "../Contex/CatalogProvider";
import queryString from "query-string";
import { useEffect, useState } from "react";
import { getProducts } from "@/lib/catalog/catalogAction";
import { IResponseProducts } from "@/types/product";
import CardProduct from "../CardProduct/CardProduct";

const Catalog = () => {

    const { filter, setFilter } = useCatalogContext();
    const [products, setProducts] = useState<IResponseProducts>({} as IResponseProducts);
    const [isSortOpen, setIsSortOpen] = useState(false);

    const loadProducts = async () => {

        const qu = queryString.stringify(filter, {
            skipEmptyString: true,
            skipNull: true,
        });
        console.log(qu);
        const productsData = await getProducts(qu);
        console.log("🚀 ~ loadProducts ~ productsData:", productsData)
        setProducts(productsData);

    }

    useEffect(() => {
        loadProducts();
    }, [filter]);



    return (
        <div className="flex flex-col gap-[19px]">

            <p className="font-[400] text-[14px] xl:text-[18px]">
                <Link
                    className="cursor-pointer text-heavyGray hover:text-primary"
                    href="/">Главная
                </Link>
                <span className="text-black"> / Каталог</span>
            </p>
            <h4 className="title font-[400] text-black">Каталог</h4>
            <div className="flex justify-between items-end mb-[30px]">
                <label className="relative block w-1/3 h-[57px] xl:h-[75px] lg:h-[56px] md:h-[60px]">
                    <Icon
                        src="/icon/search.svg"
                        fill="transparent"
                        stroke="black"
                        className="w-[20px] h-[20px] absolute left-2 top-1/2 -translate-y-1/2 "
                    />
                    <input
                        type="text"
                        value={filter.brand}
                        placeholder="Поиск"
                        onChange={(e) => setFilter({ ...filter, brand: e.target.value })}
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
                    Сортировать по
                    <Icon
                        src="/icon/arrow-up.svg"
                        fill="black"
                        className={`w-[20px] h-[20px] cursor-pointer absolute right-0 top-0.5 ${isSortOpen ? "" : "rotate-180"}`}
                    />

                    <ul className={`absolute w-full px-[11px] top-10 bg-white z-10
                        rounded-[4px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] 
                        text-heavyGray text-nowrap
                        font-[400] text-[13px]  md:text-[13px] lg:text-[10px] xl:text-[13px]
                        ${isSortOpen ? "block" : "hidden"}`}>
                        <li
                            className={`cursor-pointer py-[11px] border-b border-dashed border-[#C9C9C9] 
                                ${filter.ordering.includes('total_order_count') && "underline underline-offset-4"}
                                `}
                            onClick={() => { setFilter({ ...filter, ordering: 'total_order_count' }), setIsSortOpen(false) }}
                        >По популярности
                        </li>
                        <li
                            className={`cursor-pointer py-[11px] border-b border-dashed border-[#C9C9C9] 
                                ${filter.ordering.includes('created_at') && "underline underline-offset-4"}
                                `}
                            onClick={() => { setFilter({ ...filter, ordering: 'created_at' }), setIsSortOpen(false) }}
                        >По новизне
                        </li>
                        <li
                            className={`cursor-pointer py-[11px] border-b border-dashed border-[#C9C9C9] 
                                ${!filter.ordering.startsWith('-') && "underline underline-offset-4"}
                                `}
                            onClick={() => {
                                if (!filter.ordering.startsWith('-')) {
                                    setFilter({ ...filter, ordering: filter.ordering as IOrdering })
                                } else {
                                    setFilter({ ...filter, ordering: filter.ordering.slice(1) as IOrdering })
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

            <div className="w-full flex justify-center gap-24 mb-[56px]">
                <ul>
                    <li>

                    </li>
                </ul>

                <Icon
                    src="/icon/arrow-next.svg"
                    size={48}
                    fill="#ADB5BD"
                    className="cursor-pointer"
                />
            </div>
        </div>
    );
};

export default Catalog;