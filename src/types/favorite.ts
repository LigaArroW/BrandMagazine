import { IProduct } from "./product"

export interface IAddToFavorite {
    client: number
    product: number
    detail?: string
}

export interface IFavorite {
    count: number
    next: string
    previous: string
    results: IProduct[]
}

