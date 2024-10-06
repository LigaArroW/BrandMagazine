export interface UserDTO {
    id: number
    first_name: string
    last_name: string
    patronymic: string
    phone_number: string
    email: string
    city: string
    address: string
}

export interface TempUser extends UserDTO {
    note?: string
    time?: string
    promoCode?: string
}
