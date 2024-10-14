'use client';
import { useEffect, useState } from "react";
import { ISex, useCatalogContext } from "../Contex/CatalogProvider";
import { Icon } from "@/shared/ui/icon";
// import { Range } from "react-range";
// import { getCategory, getProductsBySection } from "@/lib/catalog/catalogAction";
import { IGetProductsBySection } from "@/types/product";
import queryString from "query-string";


interface IFilter {
    colors: string[];
    categories: IGetProductsBySection
}

const Filter: React.FC<IFilter> = ({ colors, categories }) => {
    const { filter, setFilter, resetFilter, price } = useCatalogContext();
    const [statePrice, setStatePrice] = useState({ min: price.min, max: price.max });
    // const quer = window.location.search
    // console.log("🚀 ~ quer:", quer)
    const [sex, setSex] = useState(filter.sex || '');

    useEffect(() => {
        if (window.location.search) {
            const qu = queryString.parse(window.location.search.slice(1));
            if (qu.sex) {
                setFilter({ ...filter, sex: qu.sex as ISex });
            }


            // setFilter(JSON.parse(window.location.search.slice(1)))
        };
    }, []);

    const [isMaleOpen, setIsMaleOpen] = useState(false);
    const [isFemaleOpen, setIsFemaleOpen] = useState(false);

    useEffect(() => {
        setStatePrice({ min: price.min, max: price.max });
    }, [price]);

    // useEffect(() => {
    //     if (isFemaleOpen) return setFilter({ ...filter, sex: "woman,unisex", category: [] });
    //     if (!isFemaleOpen) return setFilter({ ...filter, sex: "", category: [] });
    // }, [isFemaleOpen]);

    // useEffect(() => {
    //     if (isMaleOpen) return setFilter({ ...filter, sex: "man,unisex", category: [] });
    //     if (!isMaleOpen) return setFilter({ ...filter, sex: "", category: [] });
    // }, [isMaleOpen]);




    const summ = (obj: { [key: string]: number }) => {
        const sum = Object.values(obj).reduce((acc, current) => acc + current, 0);
        return new Intl.NumberFormat().format(sum);
    }

    return (
        <div className="flex flex-col gap-[60px]">
            <div className="w-full">
                <h4 className="title mb-[46px]">Все категории</h4>
                <div className="w-full py-[13px] relative border-b-2 border-[#C9C9C9] border-dotted">
                    <Icon
                        src="/icon/arrow-up.svg"
                        // onClick={() => setIsFemaleOpen(!isFemaleOpen)}
                        fill="black"
                        className={`w-[20px] h-[20px] cursor-pointer absolute right-0 top-[16px] ${filter.sex === "woman,unisex" ? "" : "rotate-180"}`}
                    />
                    <p
                        className="cursor-pointer flex items-center gap-[28px] font-[400] text-[15px] text-heavyGray 2xl:text-[20px] lg:text-[16px] mb:text-[26px]"
                        // onClick={() => setIsFemaleOpen(!isFemaleOpen)}
                        onClick={() => {
                            if (filter.sex === "woman,unisex") {
                                return setFilter({ ...filter, sex: "", category: [] })
                            } else {
                                return setFilter({ ...filter, sex: "woman,unisex", category: [] })
                            }
                        }
                        }
                    >Женское
                        <span
                            className="font-[900] text-secondary text-[10px]  xl:text-[15px] lg:text-[11px] md:text-[19px]"
                        >{summ(categories.Woman)}</span>
                    </p>
                    {filter.sex === "woman,unisex" && <ul className="mt-[12px] flex flex-col gap-1">
                        {Object.keys(categories.Woman).map((item, index) => (
                            <li key={item}
                                className={`${categories.Woman[item] === 0 ? "hidden" : ""}`}
                                onClick={() => setFilter({ ...filter, category: [item.toString()] })}>
                                <p
                                    className="cursor-pointer flex items-center gap-[1em] font-[400] text-[14px] text-heavyGray 2xl:text-[14px] lg:text-[14px] mb:text-[20px] border-t-[1px] pt-1"
                                >{item}
                                    <span
                                        className="font-[900] text-secondary text-[10px]  xl:text-[15px] lg:text-[11px] md:text-[19px]"
                                    >{categories.Woman[item]}</span>
                                </p>
                            </li>
                        ))}
                    </ul>}
                    {/* {isFemaleOpen && <ul className="mt-[12px] flex flex-col gap-1">
                        {Object.keys(categories.Woman).map((item, index) => (
                            <li key={item}
                                className={`${categories.Woman[item] === 0 ? "hidden" : ""}`}
                                onClick={() => setFilter({ ...filter, category: [item.toString()] })}>
                                <p
                                    className="cursor-pointer flex items-center gap-[1em] font-[400] text-[14px] text-heavyGray 2xl:text-[14px] lg:text-[14px] mb:text-[20px] border-t-[1px] pt-1"
                                >{item}
                                    <span
                                        className="font-[900] text-secondary text-[10px]  xl:text-[15px] lg:text-[11px] md:text-[19px]"
                                    >{categories.Woman[item]}</span>
                                </p>
                            </li>
                        ))}
                    </ul>} */}
                </div>



                <div className="w-full py-[13px] relative border-b-2 border-[#C9C9C9] border-dotted">
                    <Icon
                        src="/icon/arrow-up.svg"
                        // onClick={() => setIsMaleOpen(!isMaleOpen)}
                        // onClick={() => { setFilter({ ...filter, sex: "man,unisex" }), setIsMaleOpen(!isMaleOpen) }}
                        fill="black"
                        className={`w-[20px] h-[20px] cursor-pointer absolute right-0 top-[16px] ${filter.sex === "man,unisex" ? "" : "rotate-180"}`}
                    />
                    <p
                        className="cursor-pointer flex items-center gap-[28px] font-[400] text-[15px] text-heavyGray 2xl:text-[20px] lg:text-[16px] mb:text-[26px]"
                        // onClick={() => setIsMaleOpen(!isMaleOpen)}
                        onClick={() => {
                            if (filter.sex === "man,unisex") {
                                return setFilter({ ...filter, sex: "", category: [] })
                            } else {
                                return setFilter({ ...filter, sex: "man,unisex", category: [] })
                            }
                        }}
                    >Мужское
                        <span
                            className="font-[900] text-secondary text-[10px]  xl:text-[15px] lg:text-[11px] md:text-[19px]"
                        >{summ(categories.Man)}</span>
                    </p>
                    {filter.sex === "man,unisex" && <ul className="mt-[12px] flex flex-col gap-1">
                        {Object.keys(categories.Man).map((item, index) => (
                            <li key={item}
                                className={`${categories.Man[item] === 0 ? "hidden" : ""}`}
                                // onClick={() => setFilter({ ...filter, sex: 'man,unisex', category: [item.toString()] })}>
                                onClick={() => setFilter({ ...filter, category: [item.toString()] })}>
                                <p
                                    className="cursor-pointer flex items-center gap-[1em] font-[400] text-[14px] text-heavyGray 2xl:text-[14px] lg:text-[14px] mb:text-[20px] border-t-[1px] pt-1"
                                >{item}
                                    <span
                                        className="font-[900] text-secondary text-[10px]  xl:text-[15px] lg:text-[11px] md:text-[19px]"
                                    >{categories.Man[item]}</span>
                                </p>
                            </li>
                        ))}

                    </ul>}
                    {/* {isMaleOpen && <ul className="mt-[12px] flex flex-col gap-1">
                        {Object.keys(categories.Man).map((item, index) => (
                            <li key={item}
                                className={`${categories.Man[item] === 0 ? "hidden" : ""}`}
                                // onClick={() => setFilter({ ...filter, sex: 'man,unisex', category: [item.toString()] })}>
                                onClick={() => setFilter({ ...filter, category: [item.toString()] })}>
                                <p
                                    className="cursor-pointer flex items-center gap-[1em] font-[400] text-[14px] text-heavyGray 2xl:text-[14px] lg:text-[14px] mb:text-[20px] border-t-[1px] pt-1"
                                >{item}
                                    <span
                                        className="font-[900] text-secondary text-[10px]  xl:text-[15px] lg:text-[11px] md:text-[19px]"
                                    >{categories.Man[item]}</span>
                                </p>
                            </li>
                        ))}

                    </ul>} */}

                </div>
            </div>
            <div className="w-full">
                <h4 className="title mb-[25px]">Бренд</h4>

                <label className="relative block w-full h-[57px] xl:h-[75px] lg:h-[56px] md:h-[60px]">
                    <Icon
                        src="/icon/search.svg"
                        fill="transparent"
                        stroke="black"
                        className="w-[20px] h-[20px] absolute left-4 top-1/2 -translate-y-1/2 "
                    />
                    <input
                        type="text"
                        value={filter.brand}
                        placeholder="Искать бренд"
                        onChange={(e) => setFilter({ ...filter, offset: null, brand: e.target.value })}
                        className="w-full h-full bg-[#D9D9D9] pl-12 placeholder:absolute placeholder:left-12 placeholder:top-1/2 placeholder:-translate-y-1/2  placeholder:text-heavyGray placeholder:font-[400] placeholder:leading-[10px]"
                    />
                </label>

            </div>
            <div className="w-full">
                <h4 className="title mb-[33px]">Цвет</h4>
                <div className="flex flex-wrap gap-[30px]">
                    {
                        colors.map((color) => (
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
                                        setFilter({ ...filter, offset: null, colors: filter.colors.filter((item) => item !== color) })
                                    } else {
                                        setFilter({ ...filter, offset: null, colors: [...filter.colors, color] })
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
            <div className="w-full flex flex-col gap-[42px] items-start mb-[50px]">
                <h4 className="title self-start">Цена</h4>
                <div className="flex gap-[25px]">

                    <label className="flex gap-[14px] items-center font-[700] text-[10px] md:text-[17px] xl:text-[14]">
                        от
                        <input type="text"
                            inputMode="numeric"
                            placeholder={price.min !== null ? price.min.toString() : ''}
                            value={filter.price_min || ''}

                            onChange={(e) => {
                                const value = e.target.value;
                                const regex = /^\d*$/; // регулярное выражение для проверки только цифр
                                if (regex.test(value)) {
                                    setStatePrice({ ...statePrice, min: value === '' ? null : Number(value) });
                                    setFilter({ ...filter, offset: null, price_min: value === '' ? null : Number(value) });
                                }
                            }}
                            className="w-[76px] h-[33px] bg-[#D9D9D9] rounded text-heavyGray pl-4 md:w-[120px] md:h-[44px] xl:w-[76px] xl:h-[25px] 2xl:w-[98px] 2xl:h-[36px]" />
                    </label>
                    <label className="flex gap-[14px] items-center font-[700] text-[10px] md:text-[17px] xl:text-[14]">
                        до
                        <input type="text"
                            inputMode="numeric"
                            placeholder={price.max !== null ? price.max.toString() : ''}
                            value={filter.price_max || ''}
                            onChange={(e) => {
                                const value = e.target.value;
                                const regex = /^\d*$/; // регулярное выражение для проверки только цифр
                                if (regex.test(value)) {
                                    setStatePrice({ ...statePrice, max: value === '' ? null : Number(value) });
                                    setFilter({ ...filter, offset: null, price_max: value === '' ? null : Number(value) });
                                }
                            }}
                            className="w-[76px] h-[33px] bg-[#D9D9D9] rounded text-heavyGray pl-4 md:w-[120px] md:h-[44px] xl:w-[76px] xl:h-[25px] 2xl:w-[98px] 2xl:h-[36px]" />
                    </label>



                </div>
                {/* <Range
                    values={[statePrice.min || price.min, statePrice.max || price.max]}
                    onChange={([min, max]) => {
                        // setFilter({ ...filter, offset: null, price_min: min, price_max: max })
                        setStatePrice({ min, max })
                    }}
                    onFinalChange={([min, max]) => {
                        setFilter({ ...filter, offset: null, price_min: min, price_max: max })
                    }}
                    min={price.min}
                    max={price.max}
                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: "3px",
                                width: "90%",
                                backgroundColor: "#22262A",
                            }}
                        >
                            {children}
                        </div>
                    )}

                    renderThumb={({ props }) => {

                        return (
                            <div
                                {...props}
                                key={props.key}
                                style={{
                                    ...props.style,
                                    height: "13px",
                                    width: "13px",
                                    borderRadius: "50%",
                                    backgroundColor: "#000000",
                                }}
                            >
                                <span
                                    style={{
                                        position: "absolute",
                                        left: "50%",
                                        transform: "translate(-50%, 0)",
                                        top: '-20px',
                                        backgroundColor: "transparent",
                                        padding: "5px",
                                        color: "#000000",
                                        fontSize: "11px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {props.key === 0 ? statePrice.min : statePrice.max}
                                </span>
                            </div>
                        )
                    }}

                    step={1000}
                /> */}
            </div>
        </div>
    );
};

export default Filter;