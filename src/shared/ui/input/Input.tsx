"use client";
import { useFormContext } from 'react-hook-form';
import { Input as CustomInput } from '@headlessui/react';
import clsx from 'clsx';
import IMask from 'imask';
import { useEffect, useRef, useCallback } from "react";

interface IPropsInput {
    name: string;
    label?: string;
    type?: string;
    placeholder?: string;
    validation?: object;
    className?: string;
    maskOptions?: any;
    required?: boolean;
    pattern?: string;
    value?: string;
    onChange?: (e?: any) => void;
}

export const Input = ({
    name,
    value,
    label,
    type = 'text',
    placeholder = '',
    validation = {},
    className = '',
    maskOptions,
    required = false,
    pattern,
    onChange,
    ...rest
  }: IPropsInput) => {
    const { register, formState: { errors } } = useFormContext();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const setInputRef = useCallback((element: HTMLInputElement | null) => {
        inputRef.current = element;
        if (element) {
            const registerRef = register(name, validation);
            registerRef.ref(element);
        }
    }, [register, name, validation]);

    useEffect(() => {
        if (inputRef.current && maskOptions) {
            const maskInstance = IMask(inputRef.current, maskOptions);
            return () => {
                maskInstance.destroy();
            };
        }
    }, [maskOptions]);

    return (
        <div className={clsx('wrapper-input', className)}>
            {label && <label htmlFor={name} className="wrapper-input__label">{label}</label>}
            <CustomInput
                ref={setInputRef}
                as="input"
                id={name}
                onChange={onChange}
                value={value}
                type={type}
                required={required}
                pattern={pattern}
                placeholder={placeholder}
                className={clsx(
                    'bg-inherit border border-[#d9d9d9] py-[11px] px-[10px] text-[12px] text-black/70 w-full 2xl:p-[14px] 2xl:text-[16px]',
                    {
                        '': errors[name]
                    }
                )}
                {...rest}
            />
            {errors[name] && (
                <span className="">
                    Некорректный формат
                </span>
            )}
        </div>
    );
}
