import { FC } from "react"
import Assortiment from "../assets/icons/Assortiment"
import BigAssortion from "../assets/icons/BigAssortion"
import Confidition from "../assets/icons/Confidition"
import ControlQuantity from "../assets/icons/ControlQuantity"
import Delivery from "../assets/icons/Delivery"
import DeliveryGold from "../assets/icons/DeliveryGold"
import Economy from "../assets/icons/Economy"
import FullButik from "../assets/icons/FullButik"
import MirrowReplica from "../assets/icons/MirrowReplica"
import OriginalMaterials from "../assets/icons/OriginalMaterials"
import Payment from "../assets/icons/Payment"
import UsStar from "../assets/icons/UsStar"
import clsx from "clsx"
import Filter from "../assets/icons/Filter"


export enum EIcon {
    MirrowReplica = 'MirrowReplica',
    Payment = 'Payment',
    OriginalMaterials = 'OriginalMaterials',
    DeliveryGold = 'DeliveryGold',
    BigAssortion = 'BigAssortion',
    Assortiment = 'Assortiment',
    Confidition = 'Confidition',
    ControlQuantity = 'ControlQuantity',
    Delivery = 'Delivery',
    Economy = 'Economy',
    FullButik = 'FullButik',
    UsStar = 'UsStar',
    Filter = 'Filter'
}



interface IconProps {
    name: EIcon
    style?: string
    onClick?: () => void
}

const renderComponent = (name: EIcon) => {
    switch (name) {
        case EIcon.MirrowReplica:
            return <MirrowReplica />
        case EIcon.Payment:
            return <Payment />
        case EIcon.OriginalMaterials:
            return <OriginalMaterials />
        case EIcon.DeliveryGold:
            return <DeliveryGold />
        case EIcon.BigAssortion:
            return <BigAssortion />
        case EIcon.Assortiment:
            return <Assortiment />
        case EIcon.Confidition:
            return <Confidition />
        case EIcon.ControlQuantity:
            return <ControlQuantity />
        case EIcon.Delivery:
            return <Delivery />
        case EIcon.Economy:
            return <Economy />
        case EIcon.FullButik:
            return <FullButik />
        case EIcon.UsStar:
            return <UsStar />
        case EIcon.Filter:
            return <Filter />
        default:
            return ''
    }
}


const IconMain: FC<IconProps> = ({ name, style, onClick }) => {


    return (
        <span className={`inline-block ${style ? style : ' 2xl:w-[96px] 2xl:h-[92px] lg:w-[69px] lg:h-[69px] w-[50px] h-[50px]'}`} onClick={onClick} >
            {renderComponent(name)}
        </span>
    );
};

export default IconMain;