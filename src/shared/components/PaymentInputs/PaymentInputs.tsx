'use client'

import Link from "next/link";
import { useMainContext } from "../Contex/MainProvider";
import { useEffect, useState } from "react";
import { verifyPromoCode } from "@/lib/user/userAction";
import { TempUser } from "@/types/user";
import DeliveryOptions from "../DeliveryOptions/DeliveryOptions";

const PaymentInputs = () => {
    const { user, accessToken, tempUser, setTempUser } = useMainContext()
    const [promoCode, setPromoCode] = useState('')
    const [isActivePromo, setIsActivePromo] = useState(false)


    useEffect(() => {
        setTempUser({
            address: user?.address || '',
            first_name: user?.first_name || '',
            last_name: user?.last_name || '',
            patronymic: user?.patronymic || '',
            phone_number: user?.phone_number || '',
            city: user?.city || '',
            note: '',
            time: '',
            promoCode: '',
            email: user?.email || '',
            id: user?.id || 0
        })
    }, [user])


    const handleConfirmPhone = async () => {

    }

    const handleVerifyPromoCode = async () => {
        if (tempUser?.promoCode && accessToken) {
            const res = await verifyPromoCode(accessToken, promoCode)
            if (res) {
                // setPromo(res.discount)
                setTempUser({ ...tempUser, promoCode: promoCode })
                setIsActivePromo(true)
            }
        }
    }

    return (
        <div className="w-full flex flex-col  gap-6 md:gap-3 xl:pr-16 xl:w-1/2 2xl:pr-24 xl:border-r-4 border-dotted border-[#C9C9C9]">
            {!user && <Link href={'/auth'}
                className="uppercase w-full py-4 text-center font-[500] whitespace-nowrap bg-[#42566440] text-[#272727]"
            >
                Уже зарегистрированы? Нажмите для входа в свой профиль
            </Link>}
            <div className="flex flex-col gap-5 xl:gap-3 2xl:gap-4">
                <h5 className="uppercase text-black font-[700] text-base  xl:text-xs 2xl:text-base">
                    контактная информация
                </h5>
                <input
                    type="text"
                    className="delivery-input w-full"
                    placeholder="Email"
                    value={tempUser?.email || ''}
                    onChange={(e) => setTempUser({ ...tempUser, email: e.target.value } as TempUser)}
                />
                <input
                    type="text"
                    className="delivery-input w-full"
                    placeholder="Телефон"
                    value={tempUser?.phone_number || ''}
                    onChange={(e) => setTempUser({ ...tempUser, phone_number: e.target.value } as TempUser)}
                />
            </div>
            {user && user.phone_number === null && <div className="flex flex-col gap-5 xl:gap-3 2xl:gap-4">
                <h5 className="uppercase text-black font-[700] text-base  xl:text-xs 2xl:text-base">
                    Подтверждение номера телефона
                </h5>
                <p className="text-heavyGray text-sm xl:text-xs 2xl:text-sm">На ваш номер отправлено СМС с кодом проверки. Введите код в поле ниже.</p>
                <div className="flex gap-[5px] items-stretch">
                    <input type="text" className="delivery-input w-3/5" placeholder="XXX" />
                    <button type="button" className="w-2/5 uppercase bg-primary text-white" onClick={handleConfirmPhone}>подтвердить</button>
                </div>

            </div>}

            <div className="flex flex-col gap-5 xl:gap-3 2xl:gap-4">
                <h5 className="uppercase text-black font-[700] text-base  xl:text-xs 2xl:text-base">
                    Личные данные
                </h5>
                <div className="flex gap-[5px]">
                    <input type="text"
                        className="delivery-input w-1/2"
                        placeholder="Имя"
                        value={tempUser?.first_name || ''}
                        onChange={(e) => setTempUser({ ...tempUser, first_name: e.target.value } as TempUser)}
                    />
                    <input type="text"
                        className="delivery-input w-1/2"
                        placeholder="Фалилия"
                        value={tempUser?.last_name || ''}
                        onChange={(e) => setTempUser({ ...tempUser, last_name: e.target.value } as TempUser)}
                    />
                </div>
                <input type="text"
                    className="delivery-input w-full"
                    placeholder="Отчество"
                    value={tempUser?.patronymic || ''}
                    onChange={(e) => setTempUser({ ...tempUser, patronymic: e.target.value } as TempUser)}
                />
                <input type="text"
                    className="delivery-input w-full"
                    placeholder="Город"
                    value={tempUser?.city || ''}
                    onChange={(e) => setTempUser({ ...tempUser, city: e.target.value } as TempUser)}
                />
                <input type="text"
                    className="delivery-input w-full"
                    placeholder="Адрес"
                    value={tempUser?.address || ''}
                    onChange={(e) => setTempUser({ ...tempUser, address: e.target.value } as TempUser)}
                />
                <input type="text"
                    className="delivery-input w-full"
                    placeholder="Примечание к заказу (необязательно)"
                    value={tempUser?.note || ''}
                    onChange={(e) => setTempUser({ ...tempUser, note: e.target.value } as TempUser)}
                />
            </div>
            <div className="flex flex-col gap-5 xl:gap-3 2xl:gap-4">
                <h5 className="uppercase text-black font-[700] text-base  xl:text-xs 2xl:text-base">
                    Время доставки
                </h5>
                <input type="text"
                    className="delivery-input w-2/3"
                    placeholder="Время доставки"
                    value={tempUser?.time || ''}
                    onChange={(e) => setTempUser({ ...tempUser, time: e.target.value } as TempUser)}

                />
            </div>
            {!isActivePromo && <div className="flex flex-col gap-5 xl:gap-3 2xl:gap-4">
                <h5 className="uppercase text-black font-[700] text-base  xl:text-xs 2xl:text-base">
                    Промокод
                </h5>
                <div className="flex gap-[5px] items-stretch">
                    <input type="text"
                        className="delivery-input w-2/3"
                        placeholder="Промокод"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <button type="button" className="w-1/3 uppercase bg-primary text-white" onClick={handleVerifyPromoCode}>применить</button>
                </div>


            </div>}
            <div className="block xl:hidden">
                <DeliveryOptions payment />
            </div>



        </div>
    );
};

export default PaymentInputs;