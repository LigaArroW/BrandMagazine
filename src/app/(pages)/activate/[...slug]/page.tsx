'use client'

import { activate } from "@/lib/activate/activate"
import { Button } from "@/shared/ui/button"
import clsx from "clsx"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export default function ActionPage({ params }: { params: { slug: string[] } }) {
    const router = useRouter()
    const [pending, setPending] = useState(true)
    const [isOk, setIsOk] = useState(false)
    const [info, setInfo] = useState('')
    const [uid, token] = params.slug


    useEffect(() => {
        async function postData() {
            const resp = await activate(uid, token)
            console.log("🚀 ~ postData ~ resp:", resp)
            if (resp === undefined) {
                setPending(false)
                setInfo('Произошла ошибка сервера. Попробуйте ещё раз позже')
            }
            if (resp && resp.success) {
                setPending(false)
                setIsOk(true)
            }
            if (resp && !resp.success) {
                console.log(resp);

                setPending(false)
                setInfo(resp.error)
            }


        }

        postData()
    }, [])


    return (

        <div className="page">
            <div className="container">
                <div className="row">
                    <div className={clsx('page__title')}>Активация аккаунта</div>

                    {pending && <div className="flex gap-3 items-center">
                        <div className="spinner"></div>
                        <p className="text-center">Подождите...</p>
                    </div>
                    }

                    {!isOk && !pending && <div className="flex gap-3 items-center">
                        {info}
                    </div>}
                    {isOk && !pending && <div className="flex gap-3 items-center">

                        <Button onClick={() => router.push('/')}>Перейти на главную страницу</Button>

                    </div>}
                </div>
            </div>

        </div>




    )




}


