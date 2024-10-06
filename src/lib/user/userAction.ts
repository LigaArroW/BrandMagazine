'use server'
import { UserDTO } from "@/types/user"

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

interface IVerifyCode {
    code: string
    discount: string
}

export async function verifyPromoCode(token: string, code: string): Promise<IVerifyCode | undefined> {
    try {
        const resp = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/promocode/${code}/check/`, {
            method: 'GET',
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


// export async function confirmPhone(token: string): Promise<boolean> {
//     try {

//     } catch (error) {

//     }
// }


