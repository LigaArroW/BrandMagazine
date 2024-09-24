"use client";
import { useState } from "react";
import { Checkbox as CheckboxWrapper} from '@headlessui/react'
import { Icon } from "../icon";
import clsx from "clsx";
export const Checkbox = () => {
    const [enabled, setEnabled] = useState(false)

    return (
        <CheckboxWrapper
            checked={enabled}
            onChange={setEnabled}
            className="border border-[#8a8a8a] w-full max-w-[21px] h-[21px] flex items-center justify-center"
        >
            <Icon
                src="/icon/check.svg"
                fill="white"
                className={clsx("hidden",{
                    "!block": enabled
                })} 
            />
        </CheckboxWrapper>
    )
}