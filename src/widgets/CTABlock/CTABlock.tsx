import "./CTABlock.scss"

const ActionButton = ({children, href}: any) => {
    return (
        <a className="ActionButton" {...{href}}>
            {children}
        </a>
    )
}

export const CTABlock = () => {
    return (
        <div className="CTABlock">
            <div className="CTABlock__container">
                <header className="CTABlock__header">
                    <h2>Закажите онлайн прямо сейчас</h2>
                    <p>Стильные реплики мировых брендов – прямо у тебя в руках!</p>
                </header>
                <div className="CTABlock__actions">
                    <ActionButton href="tel:+79032870813">
                        Заказать по телефону <u className="whitespace-nowrap">+7 903 287-08-13</u>
                    </ActionButton>

                    <ActionButton href="https://wa.me/79032870813">
                        Написать нам в WhatsApp
                    </ActionButton>
                </div>
            </div>
        </div>
    )
}
