'use client';

import { createContext, useContext, useState } from "react";

// enum IOrdering {
//     'created_at' = 'created_at',
//     '-created_at' = '-created_at',
//     'price' = 'price',
//     '-price' = '-price',
//     'total_order_count' = 'total_order_count',
//     '-total_order_count' = '-total_order_count'
// }

// enum ISex {
//     'women' = 'women',
//     'man' = 'man',
//     'unisex' = 'unisex',
//     'none' = null
// }
export type IOrdering = 'created_at' | '-created_at' | 'price' | '-price' | 'total_order_count' | '-total_order_count' | '';
export type ISex = 'woman' | 'man' | 'unisex' | '';


interface IFilter {
    brand: string
    category: string[]
    colors: string[]
    limit: number
    name: string
    offset: number | null
    ordering: IOrdering
    price_max: number | null
    price_min: number | null
    sex: ISex | `${ISex},${ISex}`
}

interface IPrice {
    min: number | null
    max: number | null

}

interface CatalogContextType {
    filter: IFilter
    setFilter: React.Dispatch<React.SetStateAction<IFilter>>
    price: IPrice
    setPrice: React.Dispatch<React.SetStateAction<IPrice>>
    resetFilter: () => void
}

const defaultFilter: IFilter = {
    brand: '',
    category: [],
    colors: [],
    limit: 16,
    name: '',
    offset: null,
    ordering: '',
    price_max: null,
    price_min: null,
    sex: ''
};

const CatalogContext = createContext<CatalogContextType>({} as CatalogContextType);
export const useCatalogContext = () => useContext(CatalogContext);

const CatalogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [filter, setFilter] = useState<IFilter>(defaultFilter);
    const [price, setPrice] = useState<IPrice>({ min: null, max: 1 });

    const resetFilter = () => {
        setFilter(defaultFilter);
    };


    return (
        <CatalogContext.Provider value={{
            filter,
            setFilter,
            resetFilter,
            price,
            setPrice
        }}>
            {children}
        </CatalogContext.Provider>
    );
};

export default CatalogProvider;