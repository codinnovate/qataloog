import { avatarIcon } from "@/assets";
import Avatar from "./Avatar";
import LangSelect from "./LangSelect";
import Logo from "./Logo";

export default function Header (){
    return (
        <header className="w-full h-[96px] flex justify-between items-center md:px-[48px]">
           <Logo />
           <div className="flex items-center justify-between gap-3">
            <LangSelect />
            <Avatar
             userName="Qataloog Admin"
             icon={avatarIcon}
             />

           </div>
        </header>
    )
}