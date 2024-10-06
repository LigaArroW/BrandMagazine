'use client'

import { useMainContext } from "@/shared/components/Contex/MainProvider";
import NavigationProfile from "@/shared/components/NavigationProfile/NavigationProfile";
import { useRouter } from "next/navigation";




export default function ProfileLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const { accessToken } = useMainContext()
    const router = useRouter()

    if (!accessToken) {
        router.push('/auth')
    }


    return (
        // <main className="container mt-[38px] md:mt-[62px] lg:mt-[75px] xl:mt-[100px]">
        <main className="page">
            <section className="container ">
                <div className="row">
                    <NavigationProfile />
                    {children}
                </div>
            </section>
        </main>
    );
}