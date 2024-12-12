'use client';


import { cn } from "@/lib/utils";
import React from "react";


interface Tab {
  id: number;
  label: string;
}

interface TabsListProps {
  tabs: Tab[]; // Updated to an array of Tab objects
  handleTabChange: (id:number) => void;
  currentTab: number;
  className?: string;
}

function TabsList({tabs, handleTabChange, currentTab}:TabsListProps) {
  return (
    <div className="w-full flex transition-all items-center max-w-[416px] h-[32px] gap-4">
      {tabs.map((tab, idx) => (
      <div
      key={idx}
      className="">
      <button 
       onClick={() => handleTabChange(idx)}
       className={cn("text-grey-100 transition-all",
        currentTab === tab.id && "text-black",
       

       )}>
        {tab.label}
      </button>
      <div className={cn("bg-transparent transition-all duration-300 rounded-3xl h-1",  
          currentTab === tab.id && "bg-secondary"
      )}
       />
      </div>
    
      ))}

    </div>
  )
}

function Tabs({children, className}:{children:React.ReactNode, className}){
  return (
    <div className={className}>
    {children}
    </div>
  )
}

function TabsContent({currentTab, id, children}:{currentTab:number, id:number, children:React.ReactNode}){
  return (
    <div className="flex justify-center md:justify-start w-full">
      {currentTab === id && children }
    </div>
  )
}
export { Tabs, TabsList, TabsContent }
