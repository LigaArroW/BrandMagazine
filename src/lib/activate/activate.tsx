'use server'

export async function activate(uid: string, token: string) {

    try {
        const resp = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/users/activation/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uid,
                token
            })
        })

        if(resp.status === 403) {
            return {
                success: false,
                error:'Данный аккаунт уже активирован'
            }
        }

        if(!resp.ok) {
            return {
                success: false,
                error:'Ошибка активации аккаунта (не правильный токен или идентификатор)'
            }
        }

        return {
            success: true,
            error:'Активация аккаунта прошла успешно'

        }

    } catch (error) {
        console.log(error);
    }

}