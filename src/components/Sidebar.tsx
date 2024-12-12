import { sidebarItems } from "@/constants";
import Button from "./Button";
import { logoutIcon } from "@/assets";
import LinkItem from "./LinkItem";
import { cn } from "@/lib/utils";
import { transform } from "next/dist/build/swc/generated-native";





export default function Sidebar({className}:{className:string}){
    return (
        <aside 
        className={cn(
            "md:min-w-[252px] text-grey-200 transition-all md:w-[252px]  h-full  flex flex-col justify-between py-6",
            className
        )}
        style={{
            // transform:"translateX()"
        }}
        >
         {/* navItems */}
         <ul className="flex flex-col gap-2">
            {sidebarItems.map((item, index) => (
                <LinkItem 
                key={index}
                {...item}
                />
            ))}
         </ul>


         {/* logout button */}
         <div className="flex  py-10 items-center justify-center">
        <Button
          bgVariant="outline"
          icon={logoutIcon}
        >
        Logout
        </Button>


         </div>

        </aside>
    )
}