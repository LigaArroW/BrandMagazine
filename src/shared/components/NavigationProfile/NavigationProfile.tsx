'use client'
import Link from "next/link";
import { ListNavigationProfile } from "./ListNavigationProfile";
import { usePathname, useRouter } from "next/navigation";
import { useMainContext } from "../Contex/MainProvider";

const NavigationProfile = () => {
    const { logout } = useMainContext()
    const router = useRouter()
    const pathname = usePathname();
    return (
        <>
            <div className="flex justify-between">
                <h2 className="uppercase text-heavyGray font-[700] block text-[22px] mb-[43px] xl:mb-[49px] 2xl:text-[29px] 2xl:mb-[65px]">Профиль</h2>
                <button
                    type="button"
                    className="bg-secondary text-white uppercase text-center h-1/2 py-3 px-12 block xl:hidden"
                    onClick={() => { logout(), router.push('/') }}>
                    Выход
                </button>
            </div>
            <div className="flex justify-between items-center   border-b-4 border-dotted border-[#C9C9C9] pb-[25px] lg:pb-[41px] md:mb-[41px] 2xl:pb-[56px] ">
                <div className="flex gap-[22px] md:gap-[45px] xl:gap-[170px] 2xl:gap-[227px] ">
                    {ListNavigationProfile.map(item => (
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

                <button
                    type="button"
                    className="bg-secondary text-white uppercase text-center py-3 px-12 hidden xl:block"
                    onClick={() => { logout(), router.push('/') }}>
                    Выход
                </button>
            </div>
        </>
    );
};

export default NavigationProfile;