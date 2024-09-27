'use client'
import Image from "next/image";
import Bag from '../../public/home/bag-1-check.png'
import Eye from '../../public/home/bag-2-check.png'
import Brands from '../../public/brands/*.png'
import Link from "next/link";
import { getImages } from "@/lib/images/images";
import { useEffect, useState } from "react";



export default function Home() {
  // console.log(process.env.NEXT_PUBLIC_FRONT_URL + '/api/brand-images');
  // const images = await getImages()
  // console.log("🚀 ~ Home ~ images:", images)
  const [img, setImg] = useState([])
  console.log("🚀 ~ Home ~ img:", img)


  useEffect(() => {

    async function getImage() {
      const images = await getImages()
      setImg(images)
    }

    getImage()
  }, [])


  return (
    <div className="container">
      <h2 className="
      text-center
       page__titles
     ">
        Зеркальные реплики мировых брендов
      </h2>

      <div className="flex min-h-[613px]">

        <div className="w-1/2 bg-tertiary flex items-center justify-start relative">
          {/* <Link href={"/catalog"} className="flex flex-col items-end gap-3" >
            <h4>Сумки</h4>
            <p className="uppercase font-[13px] underline">в каталог</p>

          </Link> */}
          <ul className="pl-[20%] flex flex-col items-end">
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
            className="object-contain absolute z-10 -right-10 -bottom-5 "
          />
        </div>
        <div className="w-1/2 bg-primary flex items-center justify-end relative">
          <ul className="pr-[20%] flex flex-col items-start">
            <li className="text-white 2xl:text-[33px] xl:text-[24px]">Аксессуары</li>
            <li className="text-white uppercase 2xl:text-[13px] xl:text-[10px] relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] before:bg-white ">
              <Link href={"/catalog"}>в каталог</Link>
            </li>
          </ul>
          <Image
            src={Eye}
            alt="bag"
            width={500}
            height={500}
            className="object-contain absolute z-8 left-0 -bottom-6  "
          />
        </div>
      </div>

      <h4 className="
      text-center
       page__titles
     ">новое в брендах</h4>

      <div className="w-full">

 



      </div>

    </div>

  );
}
