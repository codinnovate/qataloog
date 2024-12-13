import { adminIcon, 
  cogIcon, contentIcon, 
  couponIcon, 
  dashIcon,
  flagIcon, 
  schoolIcon, 
  userIcon, withdrawalIcon,
  editIcon, 
  deleteIcon,
  updateIcon,
  cancelIcon ,
  levelsIcon
} 
from "@/assets";
import {  TableProps } from "@/types/type";



export const sidebarItems = [
    {
      name: "Dashboard",
      href: "/",
      icon: dashIcon,
    },
    {
      name: "Users",
      href: "/users",
      icon: userIcon,
    },
    {
      name: "Admins",
      href: "/admin",
      icon: adminIcon,
    },
    {
      name: "Coupon Codes",
      href: "/coupons",
      icon: couponIcon,
    },
    {
      name: "Academic Levels",
      href: "/academics",
      icon: levelsIcon,
    },
    {
      name: "Platforms",
      href: "/platforms",
      icon: schoolIcon,
    },
    {
      name: "Countries",
      href: "/countries",
      icon: flagIcon,
    },
    {
      name: "Content Type",
      href: "/content",
      icon: contentIcon,
    },
    {
      name: "Withdrawals",
      href: "/withdrawals",
      icon: withdrawalIcon,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: cogIcon,
    },
  ];

export const tableData: TableProps[] = [

    {
      id:1,
      academic_level: "Primary School",
      rate: 600,
      date_created: "2024-03-10",
      date_updated: "2024-04-10",
    },
    {
      id:2,
      academic_level: "Tertiary Education",
      rate: 3000,
      date_created: "2024-03-13",
      date_updated: "2024-04-13",
    },
    
    {
      id:3,
      academic_level: "High School",
      rate: 4000,
      date_created: "2024-03-12",
      date_updated: "2024-04-12",
    },
    {
      id:5,
      academic_level: "Primary School",
      rate: 600,
      date_created: "2024-03-10",
      date_updated: "2024-04-10",
    },
    {
      id:7,
      academic_level: "Tertiary Education",
      rate: 2000,
      date_created: "2024-03-13",
      date_updated: "2024-04-13",
    },
  ];

export const ActionBtnIcon = {
  Edit:editIcon,
  Update:updateIcon,
  Delete:deleteIcon,
  Cancel:cancelIcon,

}