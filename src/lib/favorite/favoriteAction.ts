'use server'
import { IAddToFavorite, IFavorite } from "@/types/favorite"

export async function addToFavorite(id: string, token: string): Promise<IAddToFavorite | undefined> {
    try {
        const resp = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/favorites/add/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                product: id
            })
        })
        return resp.json()
    } catch (error) {
        console.log(error)
        return undefined

    }
}

export async function removeFromFavorite(id: string, token: string): Promise<boolean> {
    try {
        const resp = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/favorites/${id}/remove/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        return resp.ok
    } catch (error) {
        console.log(error)
        return false
    }
}

export async function getFavorites(token: string): Promise<IFavorite | undefined> {
    try {
        const resp = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/favorites/?limit=12', {
            method: 'GET',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        return await resp.json()
    } catch (error) {
        console.log(error)
        return undefined

    }

}