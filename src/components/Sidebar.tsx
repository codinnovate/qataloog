import { sidebarItems } from "@/constants";
import Button from "./Button";
import { logoutIcon } from "@/assets";
import LinkItem from "./LinkItem";





export default function Sidebar(){
    return (
        <aside className="md:min-w-[252px] w-[252px]  h-full  flex flex-col justify-between py-6">
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