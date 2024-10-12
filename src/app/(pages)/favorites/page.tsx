"use client";

import { AboutPayDelivery } from "@/widgets/AboutPayDelivery";
import RecomendedProducts from "@/shared/components/RecomendedProducts/RecomendedProducts";
import { useMainContext } from "@/shared/components/Contex/MainProvider";
import { FavoritesList } from "./FavoritesList";
import Link from "next/link";
import { ProfileLink } from "@/widgets/Header/consts";

export default function Favorites() {

   const { accessToken } = useMainContext()

    return (
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="page__title">Избранное</div>
                    {accessToken ? 
                        <FavoritesList />
                        :
                        <>
                            Для просмотра списка избранного необходимо <Link className="underline" href={ProfileLink}>авторизоваться</Link>
                        </>
                    }
                    <AboutPayDelivery />
                    <RecomendedProducts isCart />
                </div>
            </div>
        </div>
    )
}