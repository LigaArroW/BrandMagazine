'use client'
import { Icon } from '@/shared/ui/icon';
import { useRouter } from 'next/navigation';

interface IButtonBackWithSvg {
    style: string
    href: string
    path: string
}

const ButtonWithSvg: React.FC<IButtonBackWithSvg> = ({ style, href, path }) => {
    const router = useRouter();
    return (
        <Icon
            src={path}
            fill="#ADB5BD"
            className={style}
            onClick={() => router.push(href)}
        />
    );
};

export default ButtonWithSvg;