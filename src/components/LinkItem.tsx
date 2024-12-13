'use client'

import { StrokeIcon } from "@/assets";
import { cn } from "@/lib/utils";
import { LinkItemsProps } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LinkItem({ name, href, icon }: LinkItemsProps) {
  const pathname = usePathname();
  
  // Get the current locale (en or fr)
  const currentLocale = pathname.split('/')[1]; // assuming locale is the first segment (e.g., /en, /fr)

  // Ensure that href always includes the current locale
  const localePrefixedHref = `/${currentLocale}${href}`;

  const isActive = localePrefixedHref === pathname;

  return (
    <Link
      href={localePrefixedHref} // Use the locale-prefixed href
      className={cn(
        isActive && 'text-secondary bg-[#FCD9D1]',
        "w-full hover:bg-[#FCD9D1] hover:text-secondary rounded-xl duration-300 transition-all ease-in-out flex items-center gap-8 h-[48px]"
      )}
    >
      <Image
        alt="svg"
        className={cn(!isActive && 'invisible')}
        src={StrokeIcon}
      />
      <span className="flex items-center gap-4">
        <Image
          alt="icon"
          src={icon}
        />
        <h2 className="text-base font-semibold transition-all">{name}</h2>
      </span>
    </Link>
  )
}
