
import Image from "next/image";
import Bag from '../../public/home/bag-1-check.png'
import Eye from '../../public/home/bag-2-check.png'
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h2 className="
      text-center
       page__titles
     ">
        Зеркальные реплики мировых брендов
      </h2>

      <div className="flex min-h-[613px]">

        <div className="w-1/2 bg-tertiary flex items-center justify-center relative">
          {/* <Link href={"/catalog"} className="flex flex-col items-end gap-3" >
            <h4>Сумки</h4>
            <p className="uppercase font-[13px] underline">в каталог</p>

          </Link> */}
          <Image
            src={Bag}
            alt="bag"
            width={600}
            height={600}
            className="object-contain absolute z-10 -right-10 -bottom-5 "
          />
        </div>
        <div className="w-1/2 bg-primary flex items-center justify-center relative">
          <Image
            src={Eye}
            alt="bag"
            width={600}
            height={600}
            className="object-contain absolute z-8 left-0 -bottom-6  "
          />
        </div>
      </div>

    </div>
  );
}
