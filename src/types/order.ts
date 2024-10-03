import { IProduct } from "./product";
import { UserDTO } from "./user";

interface IOrderItem {
    product: number
    size: number
    quantity: number
}

export interface IOrder extends UserDTO {
    delivery_time: string
    total_sum: string
    delivery_cost: string
    discount: string
    status: string
    items: IOrderItem[]

}

interface IShareOrderItem {
    product: IProduct[]
    size: {
        id: number
        name: string
    }
}

export interface IGetOrders {
    id: number
    created_at: string
    total_sum: string
    delivery_cost: string
    discount: string
    items: IShareOrderItem[]
    quantity: number
}