"use client";
import Link from "next/link"
import { CatLinks, PhoneNumber, PolitishLink } from "./consts"
import { Logo } from "@/shared/ui/logo";
// import { Icon } from "@/shared/ui/icon";

export const Footer = () => {

    return (
        <footer className="bg-secondary pt-[36px] md:pt-[26px] lg:pt-[46px] pb-[28px] md:pb-[23px] lg:pb-[66px]">
            <div className="container">
                <div className="row relative xl:flex justify-between">
                <Logo className="hidden xl:block mr-[73px]" />
                    <div className="flex gap-[40px] md:gap-[67px] xl:gap-[96px] pb-[24px] xl:pb-[0] items-center md:items-start flex-grow">
                    <Logo className="hidden lg:block xl:hidden" />
                        {/* <div className="flex flex-col gap-[36px] md:gap-[67px] xl:gap-[96px] md:flex-row">
                            {CatLinks.map((item, index) => (
                                <div key={index}>
                                    <div className="text-white text-[13px] md:text-[15px] leading-[15px] mb-[14px]">{item.title}</div>
                                    <div className="flex flex-col gap-[5px]">
                                        {item.list.map((item, index) => (
                                            <Link className="text-[white]/70 text-[13px] font-light leading-[15px]" key={index} href={item.link}>{item.name}</Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div> */}
                        <div className="flex flex-col gap-[33px] md:gap-[67px] xl:gap-[96px] md:flex-row">
                            {CatLinks.map((item, index) => (
                                <div key={index}>
                                    <div className="text-white text-[13px] md:text-[15px] leading-[17px] mb-[9px] md:mb-[15px]">{item.title}</div>
                                    <div className="flex flex-col gap-[4px] md:gap-[15px]">
                                        {item.list.map((item, index) => (
                                            <Link className="text-[white] text-[13px] md:text-[15px] font-normal leading-[17px]" key={index} href={item.link}>{item.name}</Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Logo className="absolute md:hidden" />
                        {/* <div className="hidden w-full max-w-[47px] h-[47px] rounded-full bg-primary md:flex md:justify-center md:items-center ml-auto">
                            <Icon fill="white" src="/icon/arrow-up.svg" />
                        </div> */}
                    </div>
                    <div className="flex flex-col gap-[14px] pt-[23px] border-t border-[#8096A6] items-center relative md:items-start xl:border-none xl:pt-0 xl:w-full xl:max-w-[143px] xl:text-right xl:items-end xl:gap-[16px]">
                        <span className="text-[12px] font-bold text-[white]/70 leading-[10px] xl:leading-[12px]">Зеркальные реплики мировых брендов</span>
                        <a className="text-[12px] font-bold text-[white] leading-[10px]" href={`tel:${PhoneNumber}`}>+7 903 287-08-13</a>
                        <a className="text-[12px] font-bold text-[white]/70 leading-[10px] md:absolute right-0 xl:relative xl:leading-[12px]" href={PolitishLink}>Политика конфиденциальности</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}