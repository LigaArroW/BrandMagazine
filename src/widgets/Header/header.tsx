"use client";
import { Icon } from "@/shared/ui/icon"
import { Logo } from "@/shared/ui/logo"
import Link from "next/link"
import { CartLink, FavoriteLink, MenuLink, ProfileLink, SearchLink } from "./consts";
import { useState } from "react";
import clsx from "clsx";
import { useCartCount } from "./useCartCount";

export const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

    const { cartCount } = useCartCount()

    return (
        <>
            <header className={clsx("bg-primary py-[7px] md:py-[15px] 2xl:py-[20px]", {
                "bg-white": isOpenMenu
            })}>
                <div className="container">
                    <div className={clsx("row", {
                        "border-b border-[#AEAFAF] !pb-[7px]": isOpenMenu
                    })}>
                        <div className="flex items-center">
                            <Logo />
                            <div className={clsx(
                                "hidden xl:flex ml-[33px] 2xl:ml-[50px] items-center gap-[40px] ",
                                "lg:gap-[24px]",
                                "xl:gap-[42px]",
                                "2xl:gap-[54px]"
                            )}>
                                {MenuLink.map((item, index) => (
                                    <Link className={clsx(
                                        "text-white text-[2px] font-medium uppercase leading-[17px] underline",
                                        "lg:text-[12px]",
                                        "xl:text-[15px]",
                                        "2xl:text-[16px] 2xl:leading-[23px]"
                                    )} href={item.link} key={index}>
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="ml-auto flex items-center gap-[17px] md:gap-[23px] xl:gap-[17px]">
                                <Link href={SearchLink}>
                                    <Icon
                                        stroke={isOpenMenu ? "black" : "white"}
                                        className="w-[18px] h-[18px] md:w-[28px] md:h-[28px] 2xl:w-[28px] 2xl:h-[28px]"
                                        src="/icon/search.svg"
                                    />
                                </Link>
                                <Link href={FavoriteLink}>
                                    <Icon
                                        stroke={isOpenMenu ? "black" : "white"}
                                        className="w-[18px] h-[18px] md:w-[28px] md:h-[28px] 2xl:w-[28px] 2xl:h-[28px]"
                                        src="/icon/favorite.svg"
                                    />
                                </Link>
                                <Link href={CartLink} className="flex items-center gap-[8px] md:gap-[11px]">
                                    <Icon
                                        stroke={isOpenMenu ? "black" : "white"}
                                        className="w-[18px] h-[18px] md:w-[28px] md:h-[28px] 2xl:w-[28px] 2xl:h-[28px]"
                                        src="/icon/cart.svg"
                                    />
                                    {cartCount > 0 &&
                                        <span className={clsx(
                                            "block bg-secondary w-[15px] h-[15px] rounded-full center-flex lg:w-[20px] lg:h-[20px]",
                                            "text-white text-[12px]"
                                        )}>{cartCount}</span>
                                    }
                                </Link>
                                <Link
                                    className={clsx("text-white text-[10px] md:text-[14px] xl:text-[14px] 2xl:text-[14px] leading-[18px] md:leading-[24px] xl:leading-[10px] 2xl:leading-[23px] uppercase font-medium max-[530px]:hidden", {
                                        "text-black": isOpenMenu
                                    })}
                                    href={ProfileLink}
                                >
                                    Профиль
                                </Link>
                                {isOpenMenu ? (
                                    <div onClick={() => setIsOpenMenu(false)}>
                                        <Icon className="w-full min-w-[60px] h-[30px] md:w-[66px] md:h-[33px]" src="/icon/longArrow.svg" fill="#6D757E" />
                                    </div>
                                ) : (
                                    <div className="xl:hidden flex flex-col items-end gap-[12px] w-[39px]" onClick={() => setIsOpenMenu(true)}>
                                        <span className="block bg-white h-[2px] w-full max-w-[39px]"></span>
                                        <span className="block bg-white h-[2px] w-full max-w-[27px]"></span>
                                        <span className="block bg-white h-[2px] w-full max-w-[19px]"></span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {isOpenMenu && (
                        <div className="row">
                            <div className={clsx(
                                "flex flex-col gap-[33px] mt-[19px] md:mt-[36px]",
                            )}>
                                {MenuLink.map((item, index) => (
                                    <Link className={clsx(
                                        "text-black text-[16px] font-medium uppercase leading-[17px]"
                                    )} href={item.link} key={index}>
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </>
    )
}