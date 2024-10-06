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
    delivery_item: number
    delivery_cost: string
    discount: string
    // status: string
    items: IOrderItem[]

}

interface IProductOrder extends IProduct {
    color: string
}


interface IShareOrderItem {
    product: IProductOrder
    size: {
        id: number
        name: string
    }
    quantity: number
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