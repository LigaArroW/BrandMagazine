'use client';

import { Icon } from "@/shared/ui/icon";
import Link from "next/link";
import { useCatalogContext } from "../Contex/CatalogProvider";

const Catalog = () => {

    const { filter, setFilter } = useCatalogContext();

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
            <div className="flex justify-between items-end">
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
                        onChange={(e) => setFilter({ ...filter, brand: e.target.value })}
                        className="w-full h-full bg-[#D9D9D9] pl-8  placeholder:absolute placeholder:right-2 placeholder:top-1/2 placeholder:-translate-y-1/2  placeholder:text-heavyGray placeholder:font-[400] placeholder:leading-[10px] placeholder:text-center"
                    />
                </label>
        

            </div>

        </div>
    );
};

export default Catalog;