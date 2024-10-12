'use client'

import { updateUser } from "@/lib/user/userAction"
import { useMainContext } from "@/shared/components/Contex/MainProvider"
import { UserDTO } from "@/types/user"
import { useEffect, useState } from "react"

export default function MyMePage() {
    const { user, accessToken, updUser } = useMainContext()
    const [email, setEmail] = useState(user?.email || '')
    const [firstName, setFirstName] = useState(user?.first_name || '')
    const [lastName, setLastName] = useState(user?.last_name || '')
    const [phone, setPhone] = useState(user?.phone_number || '')
    const [patronymic, setPatronymic] = useState(user?.patronymic || '')
    const [city, setCity] = useState(user?.city || '')
    const [address, setAddress] = useState(user?.address || '')
    const [condirmPhone, setCondirmPhone] = useState('')


    useEffect(() => {
        setEmail(user?.email || '')
        setFirstName(user?.first_name || '')
        setLastName(user?.last_name || '')
        setPhone(user?.phone_number || '')
        setPatronymic(user?.patronymic || '')
        setCity(user?.city || '')
        setAddress(user?.address || '')
    }, [user])


    const handleConfirmPhone = async () => {
        if (accessToken && user) {


        }
    }

    const handleChangeUser = async () => {
        if (accessToken && user) {
            const newUser: UserDTO = {
                first_name: firstName,
                last_name: lastName,
                patronymic: patronymic,
                city: city,
                address: address,
                id: user.id,
                email: user.email,
                phone_number: user.phone_number
            }
            const upd = await updateUser(accessToken, user.id, newUser)
            if (upd) {
                updUser(newUser)
            }


        }
    }

    return (
        <div className="flex flex-col xl:flex-row gap-[61px] mb-[35px]">
            <div className="w-full xl:w-1/3 flex flex-col gap-[33px] xl:gap-[41px]">
                <div className="flex flex-col gap-[17px]">
                    <h5 className="uppercase text-black font-[700] text-[19px] xl:text-[12px] 2xl:text-[16px]">контактная информация</h5>
                    <input
                        type="text"
                        className="delivery-input"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        className="delivery-input"
                        placeholder="Телефон"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                {/* {!user?.phone_number && <div className="">
                    <h5 className="uppercase text-black font-[700] text-[19px] xl:text-[12px] 2xl:text-[16px]">Подтверждение номера телефона</h5>
                    <p className="text-[#5E5E5E] text-[13px]">На ваш номер отправлено СМС с кодом проверки. Введите код в поле ниже.</p>
                    <div className="flex items-stretch gap-[5px]">
                        <input
                            type="text"
                            className="delivery-input w-2/3"
                            placeholder="XXXX"
                            value={condirmPhone}
                            onChange={(e) => setCondirmPhone(e.target.value)}
                        />
                        <button className="bg-primary text-white uppercase text-center w-1/3 ">Подтвердить</button>
                    </div>
                </div>} */}
            </div>
            <div className="w-full xl:w-2/3 flex gap-[46px] flex-col xl:flex-row">
                <div className="w-full xl:w-1/2 flex flex-col gap-[12px]">
                    <h5 className="uppercase text-black font-[700] text-[19px] xl:text-[12px] 2xl:text-[16px]">Личные данные</h5>
                    <div className="flex gap-[4px]">
                        <input
                            type="text"
                            className="delivery-input w-1/2"
                            placeholder="Имя"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            type="text"
                            className="delivery-input w-1/2"
                            placeholder="Фамилия"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <input
                        type="text"
                        className="delivery-input"
                        placeholder="Отчество"
                        value={patronymic}
                        onChange={(e) => setPatronymic(e.target.value)}
                    />
                    <input
                        type="text"
                        className="delivery-input"
                        placeholder="Город"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <input
                        type="text"
                        className="delivery-input"
                        placeholder="Адрес"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />


                </div>

                <div className="w-full xl:w-1/2 flex flex-col gap-[13px] justify-center">
                    <button type="button" className="w-2/3 xl:w-1/2 py-3 bg-transparent border border-[#ADB5BD] uppercase text-[#ADB5BD]"
                        onClick={handleChangeUser}
                    >
                        Изменить данные
                    </button>
                    <button type="button" className="w-2/3 xl:w-1/2 py-3 bg-primary uppercase text-white"
                        onClick={handleConfirmPhone}

                    >
                        подтвердить
                    </button>

                </div>


            </div>

        </div>
    )
}