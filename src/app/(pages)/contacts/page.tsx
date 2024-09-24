"use client";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { Form } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { AboutPayDelivery } from "@/widgets/AboutPayDelivery";
import { Recommendations } from "@/widgets/Recommendations";

export default function Contacts() {

    const onSubmit = (data: any) => {
        console.log(data);
    }

    return (
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="page__title">Контакты</div>
                    <div className="flex flex-col gap-[25px] md:gap-[47px] lg:flex-row lg:gap-[144px]">
                        <div className="flex gap-[60px] lg:flex-col lg:gap-[30px] 2xl:gap-[40px]">
                            <div className="flex flex-col gap-[14px] 2xl:gap-[20px]">
                                <span className="text-[14px] uppercase text-black 2xl:text-[19px]">ТЕЛЕФОН</span>
                                <a className="text-black/70 text-[12px] font-bold 2xl:text-[16px]" href="tel:7 903 287-08-13">7 903 287-08-13</a>
                            </div>
                            <div className="flex flex-col gap-[14px] 2xl:gap-[20px]">
                                <span className="text-[14px] uppercase text-black 2xl:text-[19px]">eMAIL</span>
                                <a className="text-black/70 text-[12px] font-bold 2xl:text-[16px]" href="tel:exmaple@email.ru">exmaple@email.ru</a>
                            </div>
                        </div>
                        <div className="flex gap-[14px] flex-col mb-[49px] md:mb-[60px] lg:w-full lg:mb-[30px] 2xl:gap-[19px]">
                            <div className="text-[14px] uppercase text-black 2xl:text-[19px]">Связаться с нами</div>
                            <Form className="flex flex-col" onSubmit={onSubmit}>
                                <div className="flex gap-[9px] md:gap-[16px] mb-[12px] max-[375px]:flex-wrap 2xl:gap-[35px] 2xl:mb-[16px]">
                                    <Input placeholder="Имя" name="fisrt_name" className="w-full" />
                                    <Input placeholder="Email" name="email" className="w-full" />
                                </div>
                                <Textarea
                                    name="message"
                                    placeholder="Сообщение"
                                    className="mb-[25px]"
                                />
                                <label htmlFor="" className="flex gap-[8px] items-center mb-[25px]">
                                    <Checkbox />
                                    <p className="text-[13px] lg:text-[8px] 2xl:text-[11px]">Согласие на обработку <a href="/">персональных данных</a></p>
                                </label>
                                <Button>Отправить</Button>
                            </Form>
                        </div>
                    </div>
                    <AboutPayDelivery />
                    <Recommendations />
                </div>
            </div>
        </div>
    );
}