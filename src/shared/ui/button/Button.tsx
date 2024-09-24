"use client";
import clsx from "clsx";
import { Button as ButtonWrapper } from '@headlessui/react';
import { useFormStatus } from "react-dom";

interface IPropsButton {
    children: React.ReactNode;
    theme?: 'primary' | 'secondary' | 'tertiary' | 'black';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?: () => void;
    isForms?: boolean
}

export const Button = ({
    children,
    disabled = false,
    theme = 'primary',
    type = 'button',
    className,
    onClick,
    isForms = false
}: IPropsButton) => {
    const { pending } = useFormStatus()


    return (
        <ButtonWrapper
            type={type}
            as="button"
            onClick={onClick}
            disabled={disabled || isForms ? pending : false}
            className={clsx("text-[11px] leading-[40px] uppercase text-white font-medium flex items-center justify-center disabled:bg-tertiary", className, {
                "bg-primary w-full max-w-[196px] h-[44px]": theme === "primary",
                "bg-tertiary w-full max-w-[135px] 2xl:max-w-[180px] h-[33px] 2xl:h-[45px] 2xl:py-[14px]": theme === "black"
            })}
        >
            {children}
        </ButtonWrapper>
    )
}