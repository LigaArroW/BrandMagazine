interface INavigationCart {
    id: number
    link: string
    name: string
    desc: string
}

export const ListNavigation: INavigationCart[] = [
    {
        id: 1,
        link: "/cart/your-cart",
        name: "Ваша корзина",
        desc: 'Товары что вы добавили в корзину'
    },
    {
        id: 2,
        link: "/cart/payment-and-delivery",
        name: "Оплата и доставка",
        desc: 'Как оформить заказ'
    }
]