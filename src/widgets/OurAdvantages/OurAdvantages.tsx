import IconMain, { EIcon } from "@/shared/components/IconMain/IconMain";

interface IOurAdvantages {
    iconName: EIcon
    text: string
    desc?: string
    nowrap?: boolean
}

export const OurAdvantages: React.FC<IOurAdvantages> = ({ iconName, text, desc = '', nowrap = false }) => {
    return (
        <div className="flex flex-col gap-[37px] justify-center items-center">
            <IconMain name={iconName} />
            <p className={`font-AlibabaPuhuiti font-bold 2xl:text-[20px] text-center xl:text-[15px] md:text-[11px] text-heavyGray ${nowrap ? 'text-nowrap' : ''}`}>{text}</p>
            {desc && <p className="font-AlibabaPuhuiti font-normal 2xl:text-[14px] text-center xl:text-[10px] xl:font-[400] md:text-[11px] text-heavyGray">{desc}</p>}
        </div>
    );
};
