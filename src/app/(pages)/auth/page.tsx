"use client";

import { sign } from "@/lib/auth/authAction";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { Form } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { SubmitHandler, useForm } from "react-hook-form";


export default function Auth() {
    const { register, getValues } = useForm();

    const onSubmit = () => {

    }


    const onSubmitRegister = () => {
        const email = getValues('email');
        console.log("🚀 ~ onSubmitRegister ~ email:", email)
        // e.preventDefault();
        // console.log(e);

        // const sig = sign(e.email);
        // console.log("🚀 ~ onSubmitRegister ~ sig:", sig)
    }

    return (
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="page__title">Профиль</div>
                    <div className="flex gap-[14px] flex-col mb-[49px] md:mb-[60px] lg:w-full lg:mb-[30px] 2xl:gap-[19px]">
                        <div className="text-[14px] uppercase text-black 2xl:text-[19px]">ВХОД</div>
                        <Form className="flex flex-col" onSubmit={onSubmit}>
                            <div className="flex gap-[9px] md:gap-[16px] mb-[12px] max-[375px]:flex-wrap 2xl:gap-[35px] 2xl:mb-[16px]">
                                <Input placeholder="Email" name="email" className="w-full" />
                                <Input placeholder="Пароль" type="password" name="password" className="w-full" />
                            </div>
                            <label htmlFor="" className="flex gap-[8px] items-center mb-[25px]">
                                <Checkbox />
                                <p className="text-[13px] lg:text-[8px] 2xl:text-[11px]">Запомнить меня</p>
                            </label>
                            <Button type="submit">Войти</Button>
                        </Form>
                    </div>
                    <div className="flex gap-[14px] flex-col mb-[49px] md:mb-[60px] lg:w-full lg:mb-[30px] 2xl:gap-[19px]">
                        <div className="text-[14px] uppercase text-black 2xl:text-[19px]">Регистрация</div>
                        <Form className="flex flex-col" onSubmit={onSubmitRegister}>
                            <div className="flex gap-[9px] md:gap-[16px] mb-[12px] max-[375px]:flex-wrap 2xl:gap-[35px] 2xl:mb-[16px]">
                                <Input placeholder="Email" name="email" className="w-full" />
                            </div>
                            <p>Ссылка для установки нового пароля будет отправлена ​​на ваш адрес электронной почты.</p>
                            <p>Ваши личные данные будут использоваться для упрощения вашего дальнейшего взаимодействия с сайтом, управления доступом к вашему аккаунту и других целей, описанных в документе политика конфиденциальности.</p>
                            <Button type="submit">Регистрация</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}