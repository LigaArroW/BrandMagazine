"use client";

import { Tabs } from "@/shared/ui/tabs";
import { MyOrders } from "@/widgets/MyOrders";
import { TabData } from "./consts";
import { PersonalData } from "@/widgets/PersonalData";
import { FavoritesProfile } from "@/widgets/FavoritesProfile";
import { lazy, Suspense, useEffect, useState } from "react";
import { Loader } from "@/shared/ui/loader";
import { Button } from "@/shared/ui/button";
import { getToken, removeToken } from "@/lib/token/tokenAction";
import { TokenNames } from "@/types/auth";
import { useRouter } from "next/navigation";

const loadComponent = (componentName: any) =>
    lazy(() =>
        import(`@/widgets/${componentName}/index.ts`).then(module => ({
            default: module[componentName],
        }))
    );

export default function Profile() {
    const router = useRouter();
    // const token = getToken(TokenNames.access);
    const [isAuth, setIsAuth] = useState(false);
    const profileHeaderTab = TabData.map((item, index) => (
        <div key={index} className="flex flex-col gap-[7px] md:gap-[9px] 2xl:gap-[13px]">
            <div className="text-[12px] md:text-[14px] 2xl:text-[19px] font-bold text-[#8A8A8A]">{item.tabHeader.title}</div>
            <div className="text-[10px] md:text-[12px] 2xl:text-[16px] text-black"> {item.tabHeader.desc}</div>
        </div>
    ));

    const profileContentTab = TabData.map((item, index) => {
        const LazyComponent = loadComponent(item.tabContent);
        return (
            <Suspense fallback={<Loader />} key={index}>
                <LazyComponent />
            </Suspense>
        );
    });

    // useEffect(() => {
    //     if (token) {
    //         setIsAuth(true);
    //     }
    // })

    const handleClickLogout = () => {
        // removeToken(TokenNames.access);
        // removeToken(TokenNames.refresh);
        // router.push("/");
    }

    return (
        <div className="page">
            <div className="container">
                <div className="row relative">
                    <div className="page__title">Мой профиль</div>
                    <Button
                        onClick={handleClickLogout}
                        theme="black" className="max-[375px]:mt-[-7px] max-[375px]:mb-[10px] min-[375px]:absolute top-[-7px] right-[24px] md:right=[60px]">Выйти</Button>
                    <Tabs
                        tabHeader={profileHeaderTab}
                        tabContent={profileContentTab}
                    />
                </div>
            </div>
        </div>
    )
}