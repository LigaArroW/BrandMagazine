import { Icon } from "@/shared/ui/icon"

export const NavigationBottom = () => {
    return (
        <div className="text-[#6D757E] font-bold flex items-center gap-[35px] mb-[23px] md:mb-[56px] xl:mb-[15px] 2xl:mb-[20px] leading-[34px] md:leading-[42px] xl:leading-[30px] 2xl:leading-[40px] text-[11px] md:text-[14px] xl:text-[10px] 2xl:text-[14px] md:gap-[44px] xl:gap-[31px] 2xl:gap-[42px] justify-center">
            <a href="/page/1">1</a>
            <a href="/page/2">2</a>
            <a href="/page/3">3</a>
            <a href="/page/4">4</a>
            <div>...</div>
            <a href="/page/552">552</a>
            <div className="w-[50px] xl:w-[36px] 2xl:w-[48px] hidden min-[375px]:block md:ml-[84px] xl:ml-[65px] 2xl:ml-[87px]">
                <Icon fill="#ADB5BD" src="/icon/arrow-next.svg" />
            </div>
        </div>
    )
}