"use client";

import { sign } from "@/lib/auth/authAction";
import { AuthAction, RegistationAction } from "@/lib/forms/auth";
import { setToken } from "@/lib/token/tokenAction";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { Form } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { TokenNames } from "@/types/auth";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";



export default function Auth() {
    const router = useRouter();
    const [checked, setChecked] = useState(false);
    const [stateReg, actionReg] = useFormState(RegistationAction, {
        success: false,
        error: '',
        message: '',
    })
    const [stateAuth, actionAuth] = useFormState(AuthAction, {
        success: false,
        error: '',
        message: '',
    })

    useEffect(() => {
        if (stateAuth.success && stateAuth.token) {
            setToken(stateAuth.token.access, TokenNames.access)
            setToken(stateAuth.token.refresh, TokenNames.refresh)

            router.push('/')
        }


    }, [stateAuth])



    return (
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="page__title">Профиль</div>
                    <div className="flex gap-[14px] flex-col mb-[49px] md:mb-[60px] lg:w-full lg:mb-[30px] 2xl:gap-[19px]">
                        <div className="text-[14px] uppercase text-black 2xl:text-[19px]">ВХОД</div>
                        {/* <Form className="flex flex-col" onSubmit={onSubmit}>
                            <div className="flex gap-[9px] md:gap-[16px] mb-[12px] max-[375px]:flex-wrap 2xl:gap-[35px] 2xl:mb-[16px]">
                                <Input placeholder="Email" name="email" className="w-full" value={username} onChange={(e) => setUsername(e.target.value)} />
                                <Input placeholder="Пароль" type="password" name="password" className="w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <label htmlFor="" className="flex gap-[8px] items-center mb-[25px]">
                                <Checkbox />
                                <p className="text-[13px] lg:text-[8px] 2xl:text-[11px]">Запомнить меня</p>
                            </label>
                            <Button type="submit">Войти</Button>
                        </Form> */}
                        <form action={actionAuth} className="flex flex-col">
                            <div className="flex gap-[9px] md:gap-[16px] mb-[12px] max-[375px]:flex-wrap 2xl:gap-[35px] 2xl:mb-[16px]">
                                <input type="text" name="login" placeholder="Email" required className={clsx(
                                    'bg-inherit border border-[#d9d9d9] py-[11px] px-[10px] text-[12px] text-black/70 w-full 2xl:p-[14px] 2xl:text-[16px]'
                                )} />
                                <input type="password" name="password" placeholder="Пароль" required className={clsx(
                                    'bg-inherit border border-[#d9d9d9] py-[11px] px-[10px] text-[12px] text-black/70 w-full 2xl:p-[14px] 2xl:text-[16px]'
                                )} />
                            </div>
                            <label htmlFor="" className="flex gap-[8px] items-center mb-[25px]">
                                <Checkbox />
                                <p className="text-[13px] lg:text-[8px] 2xl:text-[11px]">Запомнить меня</p>
                            </label>
                            {!stateAuth.success && stateAuth.error && <p className="text-red-500">{stateAuth.error}</p>}
                            <Button type="submit" isForms >Вход</Button>
                        </form>
                    </div>
                    <div className="flex gap-[14px] flex-col mb-[49px] md:mb-[60px] lg:w-full lg:mb-[30px] 2xl:gap-[19px]">
                        <div className="text-[14px] uppercase text-black 2xl:text-[19px]">Регистрация</div>
                        {/* <Form className="flex flex-col" onSubmit={onSubmitRegister}>
                            <div className="flex gap-[9px] md:gap-[16px] mb-[12px] max-[375px]:flex-wrap 2xl:gap-[35px] 2xl:mb-[16px]">
                                <Input placeholder="Email" name="email" className="w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <p>Ссылка для установки нового пароля будет отправлена ​​на ваш адрес электронной почты.</p>
                            <p>Ваши личные данные будут использоваться для упрощения вашего дальнейшего взаимодействия с сайтом, управления доступом к вашему аккаунту и других целей, описанных в документе политика конфиденциальности.</p>
                            <Button type="submit">Регистрация</Button>
                        </Form> */}
                        <form action={actionReg} className="flex flex-col">
                            <div className="flex gap-[9px] md:gap-[16px] mb-[12px] max-[375px]:flex-wrap 2xl:gap-[35px] 2xl:mb-[16px]">
                                <input name="email" placeholder="Email" className={clsx(
                                    'bg-inherit border border-[#d9d9d9] py-[11px] px-[10px] text-[12px] text-black/70 w-full 2xl:p-[14px] 2xl:text-[16px]'
                                )} />
                                {stateReg.success && stateReg.message && <p className="text-green-500">{stateReg.message}</p>}
                                {!stateReg.success && stateReg.error && <p className="text-red-500">{stateReg.error}</p>}
                            </div>
                            <Button type="submit" isForms >Регистрация</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}