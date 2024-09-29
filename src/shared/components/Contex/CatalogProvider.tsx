'use client';

import { createContext, useContext, useState } from "react";

enum IOrdering {
    'created_at' = 'created_at',
    '-created_at' = '-created_at',
    'price' = 'price',
    '-price' = '-price',
    'total_order_count' = 'total_order_count',
    '-total_order_count' = '-total_order_count'
}

enum ISex {
    'women' = 'women',
    'man' = 'man',
    'unisex' = 'unisex',
    'none' = ''
}

interface IFilter {
    brand: string
    category: string[]
    colors: string[]
    limit: number
    name: string
    offset: number
    ordering: keyof typeof IOrdering
    price_max: number
    price_min: number
    sex: keyof typeof ISex
}


interface CatalogContextType {

    filter: IFilter
    setFilter: React.Dispatch<React.SetStateAction<IFilter>>
    resetFilter: () => void
}


const CatalogContext = createContext<CatalogContextType>({} as CatalogContextType);
export const useCatalogContext = () => useContext(CatalogContext);

const CatalogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [filter, setFilter] = useState<IFilter>({ brand: '', category: [], colors: [], limit: 100, name: '', offset: 0, ordering: 'created_at', price_max: 0, price_min: 0, sex: 'none' });


    const resetFilter = () => {
        setFilter({ brand: '', category: [], colors: [], limit: 100, name: '', offset: 0, ordering: 'created_at', price_max: 0, price_min: 0, sex: 'none' });
    };


    return (
        <CatalogContext.Provider value={{ filter, setFilter, resetFilter }}>
            {children}
        </CatalogContext.Provider>
    );
};

export default CatalogProvider;