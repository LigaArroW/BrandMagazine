"use client";

import { AboutPayDelivery } from "@/widgets/AboutPayDelivery";
import { Recommendations } from "@/widgets/Recommendations";
import Image from "next/image";

export default function About() {
    return (
        <div className="page relative">
            <div className="container">
                <div className="row">
                    <div className="page__title mb-[25px]">О НАС</div>
                    <div className="flex flex-col md:flex-row align-baseline">
                        <div className="text-[#484F56] w-full 2xl:max-w-[1088px]">
                            <p className="text-[15px] mb-[25px] leading-[18px] md:mb-[53px] 2xl:text-[16px]">Среди огромного множества фасонов, цветов и тканей хочется выбрать то, что будет действительно актуально в нынешнем и грядущем сезонах. В нашем интернет-магазине вы сможете найти вещи для отдыха, работы и особых мероприятий</p>
                            <div className="mb-[19px] text-[18px] 2xl:text-[24px] 2xl:mb-[42px] font-black uppercase leading-[24px]">Почему стоит выбрать нас?</div>
                            <ol className="text-[15px] 2xl:text-[20px] leading-[25px] list-[auto] relative left-[18px] w-full md:max-w-[348px] xl:max-w-[803px] 2xl:max-w-[1071px] md:pb-[30px]">
                                <li>Зеркальные копии 1:1 мировых брендов по лучшим ценам!</li>
                                <li>Широкий ассортимент. Мы постепенно расширяем линейки товаров и скоро будем готовы представить вам тысячи новых и модных позиций.</li>
                                <li>Качественные товары. Мы тщательно проверяем поставки и допускаем к продаже вещи только достойного качества.</li>
                                <li>Возможность вернуть вещь, если она не подошла вам по цвету или размеру.</li>
                                <li>Быстрая доставка с примеркой. Привезём на выбор несколько размеров в день заказа.</li>
                                <li>Аккуратная доставка – то, чего всегда не хватает. Мы доставляем вещи в качественной и оригинальной упаковке.</li>
                                <li>У нас работают только внимательные и опытные в сфере моды менеджеры.</li>
                                <p> Мы рады были рассказать немного о себе. Составляй стильные образы, подбирай аксессуары, читай наши модные советы и наслаждайся покупками вместе с нами!</p>
                            </ol>
                        </div>
                        {/* <div className="relative h-[389px] md:h-[739px] 2xl:h-[986px] w-full md:max-w-[466px]">
                            <Image src="/bg-about.png" alt="О нас" fill className="object-cover md:object-none" />
                        </div> */}
                    </div>
                    <AboutPayDelivery />
                    <Recommendations />
                </div>
            </div>
        </div>
    );
}