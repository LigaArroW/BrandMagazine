interface INavigationCart {
    id: number
    link: string
    name: string
    desc: string
}

export const ListNavigationProfile: INavigationCart[] = [
    {
        id: 1,
        link: "/profile/my-orders",
        name: "Мои заказы",
        desc: 'Все заказы'
    },
    {
        id: 2,
        link: "/profile/me",
        name: "Личные данные",
        desc: 'ФИО, Адресс и др'
    },
    {
        id: 3,
        link: "/profile/favorite",
        name: "Избранное",
        desc: 'Избранные товары'
    },
]