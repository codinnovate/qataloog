'use client';


import { avatarIcon } from "@/assets";
import Avatar from "./Avatar";
import LangSelect from "./LangSelect";
import Logo from "./Logo";
import { useState } from "react";
import Sidebar from "./Sidebar";



export default function Header (){
    const [openSidebar, setOpenSidebar] = useState(false);

    function handleSideBar(){
        setOpenSidebar(!openSidebar);
    }
    return (
        <header
         className="w-full  h-[96px] flex justify-between items-center md:px-[48px] px-2">
            <button
             onClick={handleSideBar}
             className="block md:hidden text-grey-100  hover:text-secondary p-1 transition-all ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="" fill="none">
                <path d="M10 5L20 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 19L14 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </button>
           <Logo />
           <div className="flex items-center justify-between gap-3">
            <LangSelect className="hidden md:flex" />
            <Avatar
             userName="Qataloog Admin"
             icon={avatarIcon}
             />
             
           </div>
           {openSidebar && 
           <div className="absolute top-0 py-5  bg-white right-0 left-0 z-50 ">
             <header className="flex justify-between items-center px-4">
                <Logo 
                />
                 <button
             onClick={handleSideBar}
             className="block md:hidden text-grey-100  hover:text-secondary p-1 transition-all ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="" fill="none">
                <path d="M10 5L20 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 19L14 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </button>

             </header>
            <Sidebar 

            className="md:hidden flex transition-all duration-300" />
           </div>
            }
        </header>
    )
}