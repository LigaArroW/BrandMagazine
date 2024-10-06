'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListNavigation } from "./ListNavigation";

const NavigationCart = () => {
    const pathname = usePathname();

    return (
        <div className="flex gap-[22px] md:gap-[45px] xl:gap-[170px] 2xl:gap-[227px] mb-[30px]  border-b-4 border-dotted border-[#C9C9C9] pb-[25px] lg:pb-[41px] xl:mb-[56px] md:mb-[41px] 2xl:pb-[56px] 2xl:mb-[75px]">
            {ListNavigation.map(item => (
                <Link href={item.link} key={item.id} className="w-1/2 lg:w-fit flex flex-col gap-[9px] 2xl:gap-[13px]">
                    <h5 className={`uppercase font-[700] text-[14px] md:text-[15px] 2xl:text-[19px] ${pathname === item.link ? 'text-black' : 'text-[#ADB5BD]'}`}>
                        {item.name}
                    </h5>
                    <p className={`select-none text-[12px] 2xl:text-[16px] ${pathname === item.link ? 'text-[#000000A8]' : 'text-[#ADB5BD]'}`}>
                        {item.desc}
                    </p>
                </Link>

            ))}

        </div>
    );
};

export default NavigationCart;