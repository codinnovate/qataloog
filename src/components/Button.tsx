import { cn } from "@/lib/utils";
import { ButtonProps } from "@/types/type";
import Image from "next/image";

const getBgVariantStyle = (variant:ButtonProps['bgVariant']) => {
    switch (variant){
        case "secondary":
            return "bg-secondary text-white";
        case "outline":
            return "bg-transparent border-2 border-secondary text-secondary";
        default:
            return "bg-white text-white";
    }
}

export default function Button({
    onClick,
    bgVariant = "secondary", 
    icon,
    isLoading,
    className,
    type = 'button',
    children
}: ButtonProps){
    return (
        <button
        disabled={isLoading}
        type={type} 
        onClick={onClick}
        className={cn(getBgVariantStyle(bgVariant), className, 'rounded-[48px] text-base font-semibold w-[204px] h-[48px] flex items-center justify-center gap-4')}
        >
         {icon && 
         <Image
          src={icon} 
          alt="btn icons"
          />
         }
         {isLoading ? (<></>) : children}
        </button>
    )
}