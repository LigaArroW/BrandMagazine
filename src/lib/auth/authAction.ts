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

