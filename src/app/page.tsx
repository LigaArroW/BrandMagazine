'use client'
import Image from "next/image";
import Bag from '../../public/home/bag-1-check.png'
import Eye from '../../public/home/bag-2-check.png'

import Link from "next/link";
import { getImages } from "@/lib/images/images";
import { useEffect, useState } from "react";
import { BrandImages } from "@/shared/ui/brandImages/BrandImages";
import { Icon } from "@/shared/ui/icon";
import IconMain, { EIcon } from "@/shared/components/IconMain/IconMain";
import { OurAdvantages } from "@/widgets/OurAdvantages/OurAdvantages";



export default function Home() {

  return (
    <div className="container bg-white">
      <h2 className="
      text-center
       page__titles
     ">
        Зеркальные реплики мировых брендов
      </h2>

      <div className="grid min-h-[613px] grid-cols-1 grid-rows-2 gap-[20px] lg:grid-cols-2 lg:grid-rows-1 lg:gap-0" dir="rtl">

        <div className=" bg-primary flex items-center justify-end relative">
          <ul className="w-full pr-[20%] flex flex-col items-start">
            <li className="text-white 2xl:text-[33px] xl:text-[24px]">Аксессуары</li>
            <li className="text-white uppercase 2xl:text-[13px] xl:text-[10px] relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] before:bg-white ">
              <Link href={"/catalog"}>в каталог</Link>
            </li>
          </ul>
          <Image
            src={Eye}
            alt="Eye"
            width={500}
            height={500}
            className="object-contain absolute z-12 left-0 -bottom-10 lg:left-0 lg:-bottom-24 w-[250px] h-[250px]  2xl:w-[500px] 2xl:h-[500px] xl:w-[400px] xl:h-[400px] lg:w-[300px] lg:h-[400px] lg:z-8"
          />
        </div>
        <div className=" bg-tertiary flex  items-center justify-start relative">
          {/* <Link href={"/catalog"} className="flex flex-col items-end gap-3" >
            <h4>Сумки</h4>
            <p className="uppercase font-[13px] underline">в каталог</p>

          </Link> */}
          <ul className="w-full pl-[20%] flex flex-col items-end">
            <li className="text-white 2xl:text-[33px] xl:text-[24px]">Сумки</li>
            <li className="text-white uppercase 2xl:text-[13px] xl:text-[10px] relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] before:bg-white ">
              <Link href={"/catalog"}>в каталог</Link>
            </li>
          </ul>
          <Image
            src={Bag}
            alt="bag"
            width={600}
            height={600}
            className="object-contain absolute z-10 right-0 bottom-0 lg:-right-10 lg:-bottom-5 w-[250px] h-[250px] 2xl:w-[600px] 2xl:h-[600px] xl:w-[500px] xl:h-[500px] lg:w-[300px] lg:h-[300px]"
          />
        </div>

      </div>
      <div className="bg-white pt-4 ">

        <h4 className="
      text-center
       page__titles
     ">новое в брендах</h4>

        <div className="w-full row overflow-hidden">

          <BrandImages many="half" class="flex gap-4 items-center justify-center " />
          <BrandImages many="remainder" class="flex gap-4 items-center justify-center" />

        </div>

      </div>
      <div className="px-[18%] bg-letter pt-[45px]">

        <h4 className="text-center page__titles">наши преимущества</h4>

        <div className="flex flex-col gap-[44px] items-center justify-center">
          <div className="grid items-start lg:grid-cols-4 lg:grid-rows-2 gap-[44px] md:grid-cols-2 md:grid-rows-4">
            <OurAdvantages iconName={EIcon.Confidition} text="Гарантии конфиденциальности" />
            <OurAdvantages iconName={EIcon.Assortiment} text="Самый широкий ассортимент" />
            <OurAdvantages iconName={EIcon.Delivery} text="Доставка в день заказа при наличии на складе" />
            <OurAdvantages iconName={EIcon.Economy} text="Экономия денег" />
            <OurAdvantages iconName={EIcon.OriginalMaterials} text="Оригинальные материалы" />
            <OurAdvantages iconName={EIcon.FullButik} text="Полный комплект бутика" />
            <OurAdvantages iconName={EIcon.UsStar} text="Нас выбирают звезды" />
            <OurAdvantages iconName={EIcon.ControlQuantity} text="Контроль качества" />
          </div>
          <div className="grid items-start lg:grid-cols-4 lg:grid-rows-1 gap-[44px] md:grid-cols-2 md:grid-rows-2 ">
            <OurAdvantages iconName={EIcon.MirrowReplica} text="ЗЕРКАЛЬНЫЕ РЕПЛИКИ" nowrap desc="В нашем интернет магазине Вы
                приобретаете не подделки, а высокоточные
                копии известных брендов. Больше не нужно
                переплачивать за имя бренда.Все наши
                товары изготавливаются из натуральных
                материалов с применением оригинальных
                технологий и проходят контроль качества." />
            <OurAdvantages iconName={EIcon.BigAssortion} text="БОЛЬШОЙ АССОРТИМЕНТ" nowrap
              desc="Мы следим за миром моды, поэтому в наших
                каталогах представлены только актуальные
                модели сумок и аксессуаров. Наш каталог дополняется каждый день."/>
            <OurAdvantages iconName={EIcon.DeliveryGold} text="ДОСТАВКА"
              desc="Есть возможность заказать на выбор несколько цветов
                и фасонов."/>
            <OurAdvantages iconName={EIcon.Payment} text="ОПЛАТА И ВОЗВРАТ" nowrap
              desc="Оплатить покупки можно наличными курьеру
                или переводом на карты Сберб, Альфа
                банк, Т-Банк. Если вещи не подошли -
                оплачивается только стоимость доставки." />
          </div>
        </div>
      </div>
      <div className="px-[18%] mb-[36px]">
        <h4 className="text-center page__titles">Закажите онлайн прямо сейчас</h4>
        <p className="font-AlibabaPuhuiti font-[400] text-heavyGray 2xl:text-[20px] xl:text-[15px] md:text-[14px] ">
          Оформить заказ можно через корзину на сайте, через кнопочку заказать в один клик, по телефону
          <a href="tel:+9032870813" className="text-black underline px-2 text-nowrap">+7 903 287-08-13</a>
          или написать нам в
          <a href="https://wa.me/79032870813" className="text-black underline px-2 text-nowrap"> WhatsApp </a>
        </p>
      </div>

    </div>

  );
}
