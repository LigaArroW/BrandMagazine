'use client'

import { useMainContext } from "@/shared/components/Contex/MainProvider"
import { useRouter } from "next/navigation"


export default function ProfilePage() {
    const { accessToken } = useMainContext()
    const router = useRouter()

    if (!accessToken) {
        router.replace('/auth')
    }

    return router.replace('/profile/my-orders')


}