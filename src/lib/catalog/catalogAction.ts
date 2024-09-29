'use server'

import { IFullProduct, IProduct } from "@/types/product"

export async function getColors(): Promise<string[]> {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/colors/')
        return await res.json()
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function getProducts(querry: string = ''): Promise<IProduct[]> {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/products/' + `${querry ? '?' + querry : ''}`)

        return await res.json() as IProduct[]
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function getOneProduct(id: string): Promise<IFullProduct | {}> {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/products/' + id)

        return await res.json() as IFullProduct
    } catch (error) {
        console.log(error)
        return {}
    }
}



