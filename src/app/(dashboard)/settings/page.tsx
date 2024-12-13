'use client';


import Password from "./_utils/Password";
import Profile from "./_utils/Profile";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs"
import Subscriptions from "./_utils/Subscriptions";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import { SearchTable } from "@/components/SearchTable";
import { TopHeader } from "@/components/TopHeader";



export default  function Settings() {
  const [currentTab, setCurrentTab] = useState(3);

  const handleTabChange = (id:number) => {
    setCurrentTab(id);
  };


  return (
  <div className="flex flex-col gap-12 w-full">
  <TopHeader title="Settings" />
  <div className="flex flex-col gap-12 ">
    <div className="flex flex-col  relative  md:flex-row justify-center md:justify-between w-full">
    <TabsList
    tabs={[
      { id: 0, label: "Profile" },
      { id: 1, label: "Password" },
      { id: 2, label: "Subscriptions" },
      { id: 3, label: "Publisher Earnings" },]}
      handleTabChange={handleTabChange}
      currentTab={currentTab}
      />
     
      </div>
    {/* tabs Headers */}
    <Tabs className='mb-[4em] '>
      <TabsContent currentTab={currentTab} id={0}>
        <Profile />
      </TabsContent>
      <TabsContent currentTab={currentTab} id={1}>
      <Password />  
      </TabsContent>
      <TabsContent currentTab={currentTab} id={2}>
        <Subscriptions />
      </TabsContent>
      <TabsContent currentTab={currentTab} id={3}>
       <SearchTable />
      </TabsContent>
    </Tabs>


  </div>
  </div>
  )
}