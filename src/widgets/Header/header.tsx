'use client'
import Link from "next/link";
import { Logo } from "@/shared/ui/logo";
import IconLink from "../IconLink/IconLink";
import { useCartCount } from "./useCartCount";
import { CartLink, CatalogLink, FavoriteLink, MenuLink, ProfileLink } from "./consts";
import "./Header.scss";

export default function Header({light = false}: any) {

   const { cartCount } = useCartCount()
   // const { favoriteCount } = useFavoriteCount()
   const favoriteCount = 0

   const stroke = light ? "black" : "white"

   let cssClass = "Header container"

   if (light)
      cssClass += " Header_light"

   return (
      <header className={cssClass}>
         <div className="row">
            <Logo />
            <nav className="Header__nav">
               <ul className="Header__nav-list">
                  {MenuLink.map((item, index) => (
                     <li key={index}>
                        <Link href={item.link}>
                           {item.name}
                        </Link>
                     </li>
                  ))}
               </ul>
            </nav>
            <div className="Header__actions">
               <IconLink
                  href={CatalogLink}
                  icon="search"
                  {...{stroke}}
               />
               <IconLink
                  href={FavoriteLink}
                  icon="favorite"
                  count={favoriteCount}
                  {...{stroke}}
               />
               <IconLink
                  href={CartLink}
                  icon="cart"
                  count={cartCount}
                  {...{stroke}}
               />
            </div>

            <Link href={ProfileLink}>
               Профиль
            </Link>
         </div>
      </header>

   );
}
