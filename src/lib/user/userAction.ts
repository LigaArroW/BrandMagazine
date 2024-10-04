'use server'
import { IAddToFavorite, UserDTO } from "@/types/user"

export async function getUserDetail(token: string): Promise<UserDTO | undefined> {
    try {
        const resp = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/users/me/detail/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        return resp.json()

    } catch (error) {

        console.log(error)
        return undefined
    }
}

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

