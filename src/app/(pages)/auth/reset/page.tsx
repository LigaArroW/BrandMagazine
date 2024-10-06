'use client'

import { resetPassword } from "@/lib/user/userAction"
import { useState } from "react"

export default function ResetPage() {
    const [email, setEmail] = useState('')
    const [isSent, setIsSent] = useState(false)
    const handleClick = async () => {
        await resetPassword(email)

    }

    return (
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="flex flex-col gap-[38px]">
                        <h2 className="uppercase text-heavyGray font-[700] block text-[22px]">Сброс пароля</h2>

                        {isSent ? (
                            <>
                                <p className="text-[#000000A8] text-[20px]">Письмо восстановления пароля отправлено.</p>
                                <p className="text-[#000000A8] text-[16px]">Письмо со ссылкой для сброса пароля было направлено на адрес электронной почты, привязанный к вашей учетной записи, доставка сообщения может занять несколько минут. Пожалуйста, подождите не менее 10 минут, прежде чем инициировать ещё один запрос.</p>

                            </>
                        ) : (
                            <>
                                <p className="text-[#000000A8] text-[12px] xl:text-[16px]">Забыли свой пароль? Укажите свой Email или имя пользователя. Ссылку на создание нового пароля вы получите по электронной почте.</p>
                                <input
                                    type="text"
                                    placeholder="Email/Имя пользователя"
                                    className="delivery-input w-full xl:w-1/2"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button
                                    className="bg-primary py-4 text-[14px] text-center text-white uppercase font-[500] w-1/2 lg:w-1/4 xl:w-1/8 2xl:w-1/12"
                                    onClick={handleClick}
                                    disabled={email.length < 5}
                                >Сбросить пароль</button>
                            </>
                        )}




                    </div>


                </div>
            </div>
        </div >
    )
}