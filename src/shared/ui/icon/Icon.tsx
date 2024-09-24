import { ReactSVG as SVG } from 'react-svg';
import clsx from 'clsx';

interface IPropsIcon {
    src: string;
    className?: string;
    size?: number | string;
    fill?: string; // Цвет заливки
    stroke?: string;  // Цвет обводки
    onClick?: () => void;
}

export const Icon = ({ 
    src, 
    className, 
    size = 24, 
    fill = 'transparent',
    stroke,
    onClick
}: IPropsIcon) => {
    return (
        <SVG  
            className={clsx('icon', className)} 
            src={src}
            onClick={onClick}
            beforeInjection={(svg) => {
                svg.setAttribute('width', `${size}`);
                svg.setAttribute('height', `${size}`);
                if (fill) {
                    svg.querySelectorAll('path').forEach((path) => {
                        path.setAttribute('fill', fill);
                    });
                }
                if (stroke) {
                    svg.querySelectorAll('path').forEach((path) => {
                        path.setAttribute('stroke', stroke);
                    });
                }
            }}
        />
    )
}