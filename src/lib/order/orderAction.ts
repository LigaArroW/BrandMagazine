'use server'
import { IGetOrders, IOrder } from "@/types/order";

export async function getMyOrders(token: string): Promise<IGetOrders[]> {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/orders/client/', {
            method: 'GET',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        return await res.json();


    } catch (error) {
        console.log(error);

        return []
    }
}

export async function createOrder(order: IOrder, token: string) {
    try {

        const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/orders/', {
            method: 'POST',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(order)
        })

        return await res.json()
    } catch (error) {
        console.log(error)

        return {}
    }
}

