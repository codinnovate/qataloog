import { ActionBtnIcon } from "@/constants";
import { ActionType } from "@/types/type";
import clsx from "clsx";
import Image from "next/image";


export default function ActionBtn({action}:{action:ActionType}){
    return (
        <button className={clsx('flex transition-all delay-300 items-center justify-center hover:bg-[#FF00001A]  hover:rounded-3xl gap-2', {
            'bg-[#FF00001A] w-10 h-10 rounded-3xl p-2':action === 'Delete',
            'px-5 ':action === 'Edit',

        })}>
            
            <p
            className={clsx('text-base  font-semibold', {
                'text-[#33A854]':action === 'Update',
                'text-[#FF0000]':action === 'Cancel',
                'hidden':action === 'Delete',
            })}
            >{action}</p>

            <Image 
            src={ActionBtnIcon[action]}
            alt={action}
            />

        </button>
    )
}