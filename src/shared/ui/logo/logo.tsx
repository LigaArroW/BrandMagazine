import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"

export const Logo = ({className}: {className?: string}) => {
    return (
        <Link href="/" className={clsx("w-full max-w-[100px] h-[41px] md:max-w-[114px] md:h-[47px] xl:max-w-[152px] xl:h-[63px] 2xl:max-w-[203px] 2xl:h-[85px] relative block", className)}>
            <Image src="/logo.svg" alt="ReplikaStore" fill />
        </Link>
    )
}