'use client';

import { useState } from "react";
import { useCatalogContext } from "../Contex/CatalogProvider";
import { Icon } from "@/shared/ui/icon";

interface IFilter {
    colors: string[];
}


const Filter: React.FC<IFilter> = ({ colors }) => {
    const { filter, setFilter, resetFilter } = useCatalogContext();
    const [isMaleOpen, setIsMaleOpen] = useState(false);
    const [isFemaleOpen, setIsFemaleOpen] = useState(false);


    return (
        <div className="flex flex-col gap-[60px]">
            <div className="w-full">
                <h4 className="title mb-[46px]">Все категории</h4>
                <div className="w-full py-[13px] relative border-b-2 border-[#C9C9C9] border-dotted">
                    <Icon
                        src="/icon/arrow-up.svg"
                        onClick={() => setIsFemaleOpen(!isFemaleOpen)}
                        fill="black"
                        className={`w-[20px] h-[20px] cursor-pointer absolute right-0 top-[16px] ${isFemaleOpen ? "" : "rotate-180"}`}
                    />
                    <p
                        className="cursor-pointer flex items-center gap-[28px] font-[400] text-[15px] text-heavyGray 2xl:text-[20px] lg:text-[16px] mb:text-[26px]"
                        onClick={() => setIsFemaleOpen(!isFemaleOpen)}
                    >Женское
                        <span
                            className="font-[900] text-secondary text-[10px]  xl:text-[15px] lg:text-[11px] md:text-[19px]"
                        >5511</span>
                    </p>
                    {isFemaleOpen && <ul className="mt-[12px] flex flex-col gap-1">
                        <li>
                            <p
                                className="cursor-pointer flex items-center gap-[28px] font-[400] text-[14px] text-heavyGray 2xl:text-[14px] lg:text-[14px] mb:text-[20px]"
                            >Сумки
                                <span
                                    className="font-[900] text-secondary text-[10px]  xl:text-[15px] lg:text-[11px] md:text-[19px]"
                                >5511</span>
                            </p>
                        </li>
                        <li>
                            <p
                                className="cursor-pointer flex items-center gap-[28px] font-[400] text-[14px] text-heavyGray 2xl:text-[14px] lg:text-[14px] mb:text-[20px]"
                            >Аксессуары
                                <span
                                    className="font-[900] text-secondary text-[10px]  xl:text-[15px] lg:text-[11px] md:text-[19px]"
                                >5511</span>
                            </p>
                        </li>
                    </ul>}
                </div>
                <div className="w-full py-[13px] relative border-b-2 border-[#C9C9C9] border-dotted">
                    <Icon
                        src="/icon/arrow-up.svg"
                        onClick={() => setIsMaleOpen(!isMaleOpen)}
                        fill="black"
                        className={`w-[20px] h-[20px] cursor-pointer absolute right-0 top-[16px] ${isMaleOpen ? "" : "rotate-180"}`}
                    />
                    <p
                        className="cursor-pointer flex items-center gap-[28px] font-[400] text-[15px] text-heavyGray 2xl:text-[20px] lg:text-[16px] mb:text-[26px]"
                        onClick={() => setIsMaleOpen(!isMaleOpen)}
                    >Мужское
                        <span
                            className="font-[900] text-secondary text-[10px]  xl:text-[15px] lg:text-[11px] md:text-[19px]"
                        >5511</span>
                    </p>
                    {isMaleOpen && <ul className="mt-[12px] flex flex-col gap-1">
                        <li>
                            <p
                                className="cursor-pointer flex items-center gap-[28px] font-[400] text-[14px] text-heavyGray 2xl:text-[14px] lg:text-[14px] mb:text-[20px]"
                            >Сумки
                                <span
                                    className="font-[900] text-secondary text-[10px]  xl:text-[15px] lg:text-[11px] md:text-[19px]"
                                >5511</span>
                            </p>
                        </li>
                        <li>
                            <p
                                className="cursor-pointer flex items-center gap-[28px] font-[400] text-[14px] text-heavyGray 2xl:text-[14px] lg:text-[14px] mb:text-[20px]"
                            >Аксессуары
                                <span
                                    className="font-[900] text-secondary text-[10px]  xl:text-[15px] lg:text-[11px] md:text-[19px]"
                                >5511</span>
                            </p>
                        </li>
                    </ul>}
                </div>
            </div>
            <div className="w-full">
                <h4 className="title mb-[25px]">Бренд</h4>

                <label className="relative block w-full h-[57px] xl:h-[75px] lg:h-[56px] md:h-[60px]">
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
                        onChange={(e) => setFilter({ ...filter, brand: e.target.value.toLowerCase() })}
                        className="w-full h-full bg-[#D9D9D9] pl-8  placeholder:absolute placeholder:right-2 placeholder:top-1/2 placeholder:-translate-y-1/2  placeholder:text-heavyGray placeholder:font-[400] placeholder:leading-[10px] placeholder:text-center"
                    />
                </label>

            </div>
            <div className="w-full">
                <h4 className="title mb-[33px]">Цвет</h4>
                <div className="flex flex-wrap gap-[30px]">
                    {
                        colors.map((color, index) => (
                            <span
                                key={color}
                                className={`uppercase 
                                    cursor-pointer
                                     underline
                                     text-[10px]
                                     font-[700]
                                     md:text-[17px]
                                     lg:text-[10px]
                                     xl:text-[13px]
                                      ${filter.colors.includes(color) ? "text-primary" : "text-heavyGray"}`}
                                onClick={() => {
                                    if (filter.colors.includes(color)) {
                                        setFilter({ ...filter, colors: filter.colors.filter((item) => item !== color) })
                                    } else {
                                        setFilter({ ...filter, colors: [...filter.colors, color] })
                                    }

                                }
                                }
                            >
                                {color}
                            </span>
                        ))
                    }
                </div>

            </div>
            <div className="w-full">
                <h4 className="title">Цена</h4>
            </div>
        </div>
    );
};

export default Filter;