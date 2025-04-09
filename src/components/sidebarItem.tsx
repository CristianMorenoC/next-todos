'use client'

import { usePathname } from "next/navigation";
import { CiBookmarkCheck } from "react-icons/ci";
import Link from "next/link";

interface Props {
    icon: React.ReactNode;
    path: string;
    title: string;
}

export default function SidebarItem({icon, path, title}: Props) {

    const pathname = usePathname();
    
    return (
    <>
        <li>
            <Link href={path} className={
                `${pathname === path ?
                'text-white bg-gradient-to-r from-sky-600 to-cyan-400' 
                : 
                ''}
                px-4 py-3 flex items-center space-x-4 rounded-md group hover:bg-gradient-to-r hover:from-sky-600 hover:bg-sky-600 hover:text-white`}>
            {icon}
            <span className="-mr-1 font-medium ">{title}</span>
            </Link>
        </li>
    </>
    )
}
