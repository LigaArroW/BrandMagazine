'use client'

import { getFavorites } from "@/lib/favorite/favoriteAction"
import CardProduct from "@/shared/components/CardProduct/CardProduct"
import { useMainContext } from "@/shared/components/Contex/MainProvider"
import { IFavorite } from "@/types/favorite"
import { useEffect, useState } from "react"


export default function MyFavoritePage() {
    const { accessToken } = useMainContext()
    const [favorites, setFavorites] = useState<IFavorite>({} as IFavorite)

    useEffect(() => {
        const getData = async () => {
            if (!accessToken) return
            const res = await getFavorites(accessToken)
            if (res) {
                setFavorites(res)
            }
        }

        getData()
    }, [])

    return (
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-[10px] lg:gap-[60px] 2xl:gap-[70px] mb-8">
            {favorites && favorites.results && favorites.results.map((item, index) => (
                <CardProduct key={index} product={item} />
            ))}
        </div>
    )
}