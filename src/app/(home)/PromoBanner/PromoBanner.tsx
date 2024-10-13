'use client'
import Link from "next/link";
import "./PromoBanner.scss";

export default function PromoBanner() {

   return (
      <div className="PromoBanner">
         <div className="PromoBanner__first row">
            <Link href={'/'} className="PromoBanner__megalink">
               Сумки
               <u>В каталог</u>
            </Link>
         </div>
         <div className="PromoBanner__second row">
            <Link href={'/'} className="PromoBanner__megalink">
               Аксессуары
               <u>В каталог</u>
            </Link>
         </div>
      </div>

   );
}
