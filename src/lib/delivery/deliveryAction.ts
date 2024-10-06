'use server'
import { IDelivery } from "@/types/delivery";

export async function getDeliveryMethods(): Promise<IDelivery[] | undefined> {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/orders/delivery-options/', {
            next: { revalidate: 3600 }
        })
        return await res.json()
    } catch (error) {
        console.log(error)
        return undefined
    }

}