export const AboutPayDelivery = () => {
    return (
        <div className="flex flex-col gap-[32px] py-[25px] border-t border-dashed botder-[#C9C9C9] lg:flex-row 2xl:py-[56px]">
            <div className="flex flex-col gap-[25px] w-full 2xl:gap-[35px]">
                <div className="text-[#484F56] text-[24px] leading-[24px] 2xl:text-[32px] 2xl:leading-[32px]">Оплата</div>
                <ul className="flex flex-col gap-[14px]">
                    <li className="text-[15px] leading-[17px] text-[#484F56] 2xl:text-[20px] 2xl:leading-[23px]">– Наличными или переводом после получения заказа</li>
                </ul>
            </div>
            <div className="flex flex-col gap-[25px] w-full 2xl:gap-[35px]">
                <div className="text-[#484F56] text-[24px] leading-[24px] 2xl:text-[32px] 2xl:leading-[32px]">Доставка</div>
                <ul className="flex flex-col gap-[14px]">
                    <li className="text-[15px] leading-[17px] text-[#484F56] 2xl:text-[20px] 2xl:leading-[23px]">– Доставка в пределах МКАД бесплатно</li>
                    <li className="text-[15px] leading-[17px] text-[#484F56] 2xl:text-[20px] 2xl:leading-[23px]">– За МКАД и МО до 2000р</li>
                    <li className="text-[15px] leading-[17px] text-[#484F56] 2xl:text-[20px] 2xl:leading-[23px]">– По России 100% предоплата, доставка осуществляется через СДЭК</li>
                </ul>
            </div>
        </div>
    )
}