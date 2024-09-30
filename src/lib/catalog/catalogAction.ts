'use server'

import { IFullProduct, IProduct, IResponseProducts } from "@/types/product"

export async function getColors(): Promise<string[]> {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/colors/')
        return await res.json()
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function getProducts(querry: string = ''): Promise<IResponseProducts> {
    try {

        const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/products/' + `?${querry}`, {
            cache: 'no-store'
        })
        

        return res.json() as Promise<IResponseProducts>
    } catch (error) {
        console.log(error)
        return {} as IResponseProducts
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



