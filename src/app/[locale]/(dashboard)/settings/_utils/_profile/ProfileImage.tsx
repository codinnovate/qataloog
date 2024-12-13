import { deleteIcon, userProfileIcon } from "@/assets"
import Button from "@/components/Button"
import Image, { StaticImageData } from "next/image"

function Avatar({src}:{src?:StaticImageData}){
    return <Image 
    alt='profile icon' 
    src={src ? src : userProfileIcon} 
    loading="lazy"  // lazy loading the image
    className="w-[204px] h-[204px] bg-secondary rounded-full object-cover" />
}

export default function ProfileImage(){
    return (
        <div className="flex items-center gap-6 ">
         <Avatar />
         <div className="flex flex-col gap-4">
            <Button>
            Upload New Picture
            </Button>
            <Button
             icon={deleteIcon} 
             bgVariant="outline">
                Remove
            </Button>
         </div>

        </div>
    )
}