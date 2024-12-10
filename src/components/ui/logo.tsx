import { link } from "fs/promises";
import Image from "next/image";
import Link from "next/link";

type Props = {
    size: number;
}

export const Logo = ({size}: Props) => {
    return (
        <Link href="/logo1.png">
            <Image
                src={'/logo.png'}
                alt="Logo do projeto"
                width={size}
                height={size}
                quality={100}
            />
        </Link>
    )
}