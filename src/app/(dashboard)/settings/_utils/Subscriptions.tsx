import LangSelect from "@/components/LangSelect";
import SlidingTab from "@/components/SlidingTab";
import SubForm from "@/components/SubForm";

export default function Subscriptions(){
    return (
        <div className="flex flex-col gap-12 max-w-[432px] w-[432px]">
            <LangSelect
            className="max-w-[204px]"
             />
            <SlidingTab />
            <SubForm />

        
        </div>
    )
}
