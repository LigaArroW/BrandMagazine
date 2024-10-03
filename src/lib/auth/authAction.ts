'use server'


export async function sign(email: string) {

    try {
        const resp = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email
            })
        })

        return resp.json()

    } catch (error) {
        console.log(error)
    }

}

export async function login(email: string, password: string) {

    try {
        const resp = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/jwt/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        return resp.json()
    } catch (error) {
        console.log(error)
    }
}

export async function verifyAuth(token: string): Promise<boolean> {
    try {
        const resp = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/jwt/verify/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token
            })
        })

        if (resp.status === 401) {
            return false
        }

        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

interface IgetAccessToken {
    access: string
}

export async function getAccessToken(refreshToken: string): Promise<IgetAccessToken | null> {
    try {
        const resp = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/jwt/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                refresh: refreshToken
            })
        })
        if (resp.status === 401) {
            return null
        }
        return await resp.json()
    } catch (error) {
        console.log(error)
        return null
    }
}
