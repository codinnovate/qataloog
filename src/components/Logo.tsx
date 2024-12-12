import { QataloogLogo } from "@/assets";
import Image from "next/image";
import Link from "next/link";

export default function Logo(){
    return (
        <Link href='/' className="w-[210px] h-[48px]">
            <Image
             alt="Qataloog logo"
             src={QataloogLogo}
             className="object-cover w-full h-full"
             />
        </Link>
    )
}