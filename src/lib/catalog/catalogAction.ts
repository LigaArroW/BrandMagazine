'use server'

import { ICategory, IFullProduct, IProduct, IResponseProducts } from "@/types/product"

export async function getColors(): Promise<string[]> {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/colors/')
        return await res.json()
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function getProducts(querry: string = ''): Promise<IResponseProducts | undefined> {
    try {

        const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/products/' + `?${querry}`, {
            cache: 'no-store'
        })


        return res.json() as Promise<IResponseProducts>
    } catch (error) {
        console.log(error)
        undefined
    }
}

export async function getOneProduct(id: string): Promise<IFullProduct | undefined> {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/products/' + id)

        return await res.json() as IFullProduct
    } catch (error) {
        console.log(error)
        return undefined
    }
}
export async function getCategory(): Promise<ICategory | {}> {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/products_by_section/')

        return await res.json() as ICategory
    } catch (error) {
        console.log(error)
        return {}
    }
}

export interface IRecomendedProducts {
    recommended_products: IProduct[]
}

export async function getRecommendedProducts(id: number | number[]): Promise<IRecomendedProducts | undefined> {
    if (!Array.isArray(id)) id = [id]

    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/products/recommended/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                reference_products: id
            })
        })
        return await res.json()
    } catch (error) {
        console.log(error)
        return undefined
    }
}

