const PaymentAndDelivery = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-8 md:gap-[25px] xl:gap-5 mb-[30px]  border-b-4 border-dotted border-[#C9C9C9] pb-[25px] lg:pb-[41px] xl:mb-[56px] md:mb-[41px] 2xl:pb-[56px] 2xl:mb-[75px]">
            <div className="select-none w-full xl:w-1/2 text-heavyGray flex flex-col gap-6 2xl:gap-[35px]">
                <h4 className="uppercase font-[600] text-2xl 2xl:text-[32px]">Оплата</h4>
                <ul className="text-[16px] 2xl:text-[20px]">
                    <li className="">- Наличными или переводом после получения заказа</li>
                </ul>
            </div>
            <div className="w-full xl:w-1/2 text-heavyGray flex flex-col gap-6 2xl:gap-[35px]">
                <h4 className="uppercase font-[600] text-2xl 2xl:text-[32px]">Доставка</h4>
                <ul className="text-[16px] 2xl:text-[20px]">
                    <li className="">- Доставка в приделах МКАД бесплатно</li>
                    <li className="">- За МКАД и МО до 2000р</li>
                    <li className="">- По России 100% предоплата, доставка осуществляется через СДЭК</li>
                </ul>
            </div>
        </div>
    );
};

export default PaymentAndDelivery;