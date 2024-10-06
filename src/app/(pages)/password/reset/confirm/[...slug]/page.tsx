'use client'

import { confirmResetPassword } from "@/lib/user/userAction"
import { useState } from "react"

export default function resetPasswordPage({ params }: { params: { slug: string[] } }) {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [uid, token] = params.slug

    const handleClick = async () => {
        const resetP = await confirmResetPassword({ uid, token, new_password: password })
        console.log("🚀 ~ handleClick ~ resetP:", resetP)
    }

    return (
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="flex flex-col gap-[38px] mb-8">
                        <h2 className="uppercase text-heavyGray font-[700] block text-[22px]">Сброс пароля</h2>
                        <input
                            type="text"
                            placeholder="Введите новый пароль"
                            className="delivery-input w-full xl:w-1/2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Повторите новый пароль"
                            className="delivery-input w-full xl:w-1/2"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button
                            className="bg-primary py-4 text-[14px] text-center text-white uppercase font-[500] w-1/2 lg:w-1/4 xl:w-1/8 2xl:w-1/12"
                            onClick={handleClick}
                            disabled={password !== confirmPassword && password.length > 0 && confirmPassword.length > 0}
                        >Сбросить пароль</button>
                    </div>
                </div>
            </div>
        </div>
    )
}