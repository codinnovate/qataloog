import Image, { StaticImageData } from "next/image";

interface AvatarProps {
    icon: string  | StaticImageData;
    userName: string;
}


export default function Avatar({icon, userName}:AvatarProps){
    return (
        <div className="flex items-center gap-2 ">
        <div className="relative">
        <Image 
        src={icon}
        alt="Qataloog Admin"
        loading="lazy"
        className="w-[40px] h-[40px] rounded-full object-cover"
        />
        <span className="ring-2 ring-white w-3 h-3 bg-success-500 rounded-full absolute bottom-0 right-0"/>
        </div>
        <h2 className='hidden md:block font-semibold text-black'>{userName}</h2>
        </div>
    )
}