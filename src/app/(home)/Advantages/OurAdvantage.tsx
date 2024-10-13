import IconMain, { EIcon } from "@/shared/components/IconMain/IconMain";
import "./OurAdvantage.scss"

interface IOurAdvantages {
    iconName: EIcon
    text: string
    desc?: string
    nowrap?: boolean
}

export const OurAdvantage: React.FC<IOurAdvantages> = ({
   iconName,
   text,
   desc,
}) => {

    let cssClass = 'OurAdvantage'

    if (desc)
        cssClass += ' OurAdvantage_desc'

    return (
        <div className={cssClass}>
            <IconMain name={iconName} style="size-[110px]"/>
            <div className="OurAdvantage__text">
                <div className="OurAdvantage__title">
                    {text}
                </div>
                {desc &&
                    <div className="OurAdvantage__desc">
                        {desc}
                    </div>
                }
            </div>
        </div>
    );
};
