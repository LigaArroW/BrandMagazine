export interface UserDTO {
    id: number
    firstName: string
    lastName: string
    patronymic: string
    phone: string
    email: string
    city: string
    address: string
}

export interface IAddToFavorite {
    client: number
    product: number
}
