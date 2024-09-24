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
