'use client'
import Link from "next/link";
import { Logo } from "@/shared/ui/logo";
import IconLink from "../IconLink/IconLink";
import { useCartCount } from "./useCartCount";
import { CartLink, CatalogLink, FavoriteLink, MenuLink, ProfileLink } from "./consts";
import "./Header.scss";
import { useState } from "react";

export default function Header({light = false}: any) {

   const { cartCount } = useCartCount()
   const [showBurger, setShowBurger] = useState(false)
   // const { favoriteCount } = useFavoriteCount()
   const favoriteCount = 0

   const stroke = light || showBurger ? "black" : "white"

   let cssClass = "Header container"

   if (light || showBurger)
      cssClass += " Header_light"

   if (showBurger)
      cssClass += " Header_show-burger"

   const toggleBurger = () => {
      setShowBurger((e) => !e)
   }

   return (
      <header className={cssClass}>
         <div className="row">
            <Logo />
            <nav className="Header__nav row">
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
            <button
               className={`burger ${showBurger ? ' burger_close' : ''}`}
               onClick={toggleBurger}
            />
         </div>
      </header>

   );
}
