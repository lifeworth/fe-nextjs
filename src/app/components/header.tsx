"use client";

import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';

const linkData = [
    { name: "Performance", path: "/performance" },
    { name: "Reliability", path: "/reliability" },
    { name: "Scale", path: "/scale" }
];


export default function Header() {
    const pathname = usePathname();
    return (
        <div className="absolute w-full z-10">
            <div className="flex justify-between container mx-auto p-8 items-center">
                <Link href="/" className="text-3xl font-bold text-white" >Home</Link>
                <div className="text-xl space-x-4 text-white">
                    {linkData.map((link) =>
                        <Link key={link.path} href={link.path} className={pathname === link.path ? 'text-purple-500' : ""}>{link.name}</Link>
                    )}
                </div>
            </div>
        </div>
    )
}
