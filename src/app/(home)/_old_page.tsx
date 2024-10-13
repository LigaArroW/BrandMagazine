'use client'
import Image from "next/image";
import Bag from '../../../public/home/bag-1-check.png'
import Eye from '../../../public/home/bag-2-check.png'

import Link from "next/link";
import { BrandImages } from "@/shared/ui/brandImages/BrandImages";
import { CTABlock } from "@/app/(home)/CTABlock/CTABlock";
import { Advantages } from "@/app/(home)/Advantages/Advantages";

export default function Home() {

  return (
    <div className="container bg-white">
      <h2 className="
      text-center uppercase
      py-[31px] md:py-[58px] 2xl:py-[84px] text-heavyGray text-[21px] md:text-[22px] lg:text-[28px] 2xl:text-[42px] px-6
     ">
        Зеркальные реплики мировых брендов
      </h2>

      <div className="grid min-h-[613px] grid-cols-1 grid-rows-2 gap-[20px] lg:grid-cols-2 lg:grid-rows-1 lg:gap-0" dir="rtl">

        <div className="bg-primary flex items-center justify-end relative">
          <ul className="w-full pr-[20%] flex flex-col items-start">
            <li className="text-white 2xl:text-[42px] xl:text-[24px]">Аксессуары</li>
            <li className="text-white uppercase 2xl:text-[18px] xl:text-[10px] relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] before:bg-white">
              <Link href={"/catalog"}>в каталог</Link>
            </li>
          </ul>
          <Image
            src={Eye}
            alt="Glasses"
            width={500}
            height={500}
            className="object-contain absolute z-12 left-0 -bottom-10 lg:left-0 lg:-bottom-24 w-[250px] h-[250px]  2xl:w-[500px] 2xl:h-[500px] xl:w-[400px] xl:h-[400px] lg:w-[300px] lg:h-[400px] lg:z-8"
          />
        </div>
        <div className="bg-tertiary flex  items-center justify-start relative">
          {/* <Link href={"/catalog"} className="flex flex-col items-end gap-3" >
            <h4>Сумки</h4>
            <p className="uppercase font-[13px] underline">в каталог</p>

          </Link> */}
          <ul className="w-full pl-[20%] flex flex-col items-end">
            <li className="text-white 2xl:text-[42px] xl:text-[24px]">Сумки</li>
            <li className="text-white uppercase 2xl:text-[18px] xl:text-[10px] relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] before:bg-white ">
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
      <div className="bg-white pt-4">

        <h4 className="
      text-center
       page__titles
     ">новое в брендах</h4>

        <div className="w-full row overflow-hidden">

          <BrandImages many="half" class="flex gap-4 items-center justify-center" />
          <BrandImages many="remainder" class="flex gap-4 items-center justify-center" />

        </div>

      </div>

      <Advantages />

      <CTABlock />

    </div>

  );
}
