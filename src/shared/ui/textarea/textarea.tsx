import { Textarea as TextareaWrapper } from "@headlessui/react";
import clsx from "clsx";

interface IPropsTextarea {
    name: string;
    placeholder?: string;
    className?: string;
}

export const Textarea = ({
    name,
    placeholder,
    className
}:IPropsTextarea) => {
    return (
        <TextareaWrapper
            name={name}
            placeholder={placeholder}
            className={clsx("border border-[#d9d9d9] py-[11px] px-[10px] text-[12px] text-black/70 2xl:text-[16px] bg-inherit resize-none", className)}
        />
    )
}