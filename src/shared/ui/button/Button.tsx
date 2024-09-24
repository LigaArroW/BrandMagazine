"use client";
import clsx from "clsx";
import { Button as ButtonWrapper } from '@headlessui/react';

interface IPropsButton {
    children: React.ReactNode;
    theme?: 'primary' | 'secondary' | 'tertiary' | 'black';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?: () => void;
}

export const Button = ({
    children,
    disabled = false,
    theme = 'primary',
    type = 'button',
    className,
    onClick
}:IPropsButton) => {
    return (
        <ButtonWrapper
            type={type}
            as="button"
            onClick={onClick}
            disabled={disabled}
            className={clsx("text-[11px] leading-[40px] uppercase text-white font-medium flex items-center justify-center", className, {
                "bg-[#c6ad8f] w-full max-w-[196px] h-[44px]": theme === "primary",
                "bg-[#425664] w-full max-w-[135px] 2xl:max-w-[180px] h-[33px] 2xl:h-[45px] 2xl:py-[14px]": theme === "black"
            })}
        >
            {children}
        </ButtonWrapper>
    )
}