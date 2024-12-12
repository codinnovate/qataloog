import { Input } from "./ui/input";

export default function SearchBar(){
    return (
        <div className="h-10 border border-grey rounded-full w-[318px]">
            <Input
             placeholder="Search"
             className="placeholder:text-grey"
             />
        </div>
    )
}