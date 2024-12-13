import { StaticImageData } from "next/image";
import { LinkProps } from "next/link";
import { ButtonHTMLAttributes } from 'react';
import { ButtonHTMLAttributes, ReactNode, SVGProps } from 'react';
import { StaticImageData } from 'next/image'; // If you're using next/image
import { FormFieldType } from "@/app/(dashboard)/settings/_utils/Password";



export  enum FormFieldType {
    INPUT = "input",
    PHONE_INPUT = "phoneInput",
  }
  
  

declare interface LinkItemsProps extends LinkProps {
    name: string;
    icon?: StaticImageData | React.FC<SVGProps<SVGSVGElement>> ; // Using React.FC instead of FunctionComponent
}

declare interface TableProps {
    id:number;
    academic_level: string;
    rate: number;
    date_created: string;
    date_updated: string;
};
  


declare interface CustomProps {
    control: Control,
    type:FormFieldType,
    inputType?: string;
    name: string,
    label: string,
    placeholder: string,
}



declare interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    type?: 'button' | 'submit' | 'reset'; // This is fine, restricting type
    children?: ReactNode;
    onClick?: () => void;
    className?: string;
    bgVariant?: "secondary" | "outline";
    icon?: StaticImageData | string; // Using React.FC instead of FunctionComponent
}



type ActionType = "Edit" | "Delete" | "Update" | "Cancel"