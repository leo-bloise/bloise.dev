'use client';
import Image from "next/image";
import GithubIcon from "./icons/GithubIcon";
import HamburguerMenu from "./icons/HamburguerMenu";
import { ReactNode, useState } from "react";
import CloseMenu from "./icons/CloseMenu";

export type MenuLink = {
    link: string;
    label: string;
    image: ReactNode;
}

type Props = {
    links: MenuLink[]
}

export default function Menu({ links }: Props) {
    const [open, setOpen] = useState(false);
    return <div className="flex p-4 border-b-[1px] fixed justify-between border-vscode-border w-full bg-vscode-background">
        <div className="flex items-center gap-x-4">
            <Image src={"/ghost.png"} width={25} height={25} alt="Leonardo Bloise" />
            <h1 className="font-bold text-vscode-foreground">leonardo.dev</h1>
        </div>
        <ul className="flex gap-x-6">
            <li onClick={() => setOpen(old => !old)} className="flex gap-x-4 items-center justify-center opacity-[50%] hover:opacity-100 cursor-pointer ease-in-out md:hidden">
                {open ? <CloseMenu /> : <HamburguerMenu />}
            </li>
            {links.map(link => {
                return <li key={link.label} className="hidden md:flex gap-x-4 items-center justify-center opacity-[50%] hover:opacity-100 cursor-pointer ease-in-out">
                    {link.image}
                    <span className="text-vscode-foreground text-sm mt-0.5 hidden md:inline">{link.label}</span>
                </li>
            })}
            <li className="flex gap-x-4 items-center justify-center opacity-[50%] hover:opacity-100 cursor-pointer ease-in-out">
                <GithubIcon width={23} height={23} />
                <span className="text-vscode-foreground text-sm mt-0.5 hidden md:inline">Projects</span>
            </li>
        </ul>
        <nav className={`absolute mt-[40px] left-0 bg-vscode-menu-color h-screen w-screen ${open ? "flex" : "hidden"} flex-col items-center pt-8 md:hidden`}>
            <ul className="flex flex-col gap-y-6">
                {links.map(link => {
                    return <li key={link.label} className="flex items-center gap-x-3">
                        {link.image}
                        <span className="text-vscode-foreground font-bold text-sm mt-0.5">{link.label}</span>
                    </li>
                })}
            </ul>
        </nav>
    </div>
}