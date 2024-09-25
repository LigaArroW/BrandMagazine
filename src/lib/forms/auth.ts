'use server'

import { IAuth } from "@/types/auth";
import { login, sign } from "../auth/authAction";




export async function AuthAction(previousState: IAuth, data: FormData) {

    try {

        const email = data.get('login') as string
        const password = data.get('password') as string

        const log = await login(email.trim(), password.trim());


        if (!log.access) return { success: false, error: log.detail as string, message: '' }

        return { success: true, error: '', message: 'Авторизация прошла успешно', token: log }

    } catch (error) {
        return { success: false, error: 'server missing', message: '' }
    }

}

export async function RegistationAction(previousState: IAuth, data: FormData) {

    try {
        const email = data.get('email') as string

        const sig = await sign(email);

        if (!sig.id) return { success: false, error: sig.email as string, message: '' }

        return { success: true, error: '', message: 'Письмо с сылкой отправлено вам на почту' }

    } catch (error) {

        return { success: false, error: 'server missing', message: '' }

    }

}


