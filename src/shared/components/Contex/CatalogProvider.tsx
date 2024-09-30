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
type ISex = 'women' | 'man' | 'unisex' | '';

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
    sex: ISex
}


interface CatalogContextType {

    filter: IFilter
    setFilter: React.Dispatch<React.SetStateAction<IFilter>>
    resetFilter: () => void
}


const CatalogContext = createContext<CatalogContextType>({} as CatalogContextType);
export const useCatalogContext = () => useContext(CatalogContext);

const CatalogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [filter, setFilter] = useState<IFilter>({ brand: '', category: [], colors: [], limit: 4, name: '', offset: null, ordering: '', price_max: null, price_min: null, sex: '' });


    const resetFilter = () => {
        setFilter({ brand: '', category: [], colors: [], limit: 4, name: '', offset: null, ordering: '', price_max: null, price_min: null, sex: '' });
    };


    return (
        <CatalogContext.Provider value={{ filter, setFilter, resetFilter }}>
            {children}
        </CatalogContext.Provider>
    );
};

export default CatalogProvider;