"use client";

import { sign } from "@/lib/auth/authAction";
import { AuthAction, RegistationAction } from "@/lib/forms/auth";
import { useMainContext } from "@/shared/components/Contex/MainProvider";
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
    const { login, accessToken } = useMainContext();
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

    if (accessToken) {
        router.push('/profile')
    }

    useEffect(() => {
        if (stateAuth.success && stateAuth.token) {
            // setToken(stateAuth.token.access, TokenNames.access)
            // setToken(stateAuth.token.refresh, TokenNames.refresh)
            console.log(stateAuth.token.access);

            login(stateAuth.token.access, stateAuth.token.refresh)
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
                            <div className="flex flex-col lg:flex-row gap-4">
                                <Button type="submit" isForms >Вход</Button>
                                <button type="button" className="underline underline-offset-2"
                                    onClick={() => router.push('/auth/reset')}
                                >Забыли пароль?</button>
                            </div>

                        </form>
                    </div>
                    <div className="flex gap-[14px] flex-col mb-[49px] md:mb-[60px] lg:w-full lg:mb-[30px] 2xl:gap-[19px]">
                        <div className="text-[14px] uppercase text-black 2xl:text-[19px]">Регистрация</div>
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