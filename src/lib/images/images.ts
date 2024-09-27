'use server';
export async function getImages() {
    const res = await fetch(process.env.NEXT_PUBLIC_FRONT_URL + '/api/brand-images')

    const data = await res.json()
    // console.log("🚀 ~ getImages ~ data:", data)
    return data
}