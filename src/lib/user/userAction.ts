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

interface IResetPassword {
    email: string
}

export async function resetPassword(email: string): Promise<IResetPassword | undefined> {
    try {
        const resp = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/users/reset_password/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email
            })
        })

        return await resp.json()

    } catch (error) {
        console.log(error)
        return undefined

    }
}
interface IConfirmResetPassword {
    uid: string
    token: string
    new_password: string
}
export async function confirmResetPassword(data: IConfirmResetPassword): Promise<IConfirmResetPassword | undefined> {
    try {
        const resp = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/users/reset_password_confirm/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        return await resp.json()

    } catch (error) {
        console.log(error)
        return undefined

    }
}

interface IUpdateUser {
    first_name: string
    last_name: string
    patronymic: string
    city: string
    address: string
}




export async function updateUser(token: string, id: number, data: IUpdateUser): Promise<IUpdateUser | undefined> {
    try {
        const resp = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/users/${id}/update/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
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


