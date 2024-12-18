import { IProduct } from "./product";

export interface ICart {
    product: IProduct
    quantity: number
    color: string
    size?: string
}