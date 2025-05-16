'use client';
import Image from "next/image";
import GithubIcon from "./icons/GithubIcon";
import HamburguerMenu from "./icons/HamburguerMenu";
import { ReactNode, useState } from "react";
import CloseMenu from "./icons/CloseMenu";
import Link from "next/link";

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
    return <div className="flex border-b-[1px] fixed justify-between border-vscode-border md:border-none w-full bg-vscode-background md:p-0">
        <div className="p-4 md:w-[20%]">
            <Link className="flex items-center gap-x-4 mt-1" href={"/"}>
                <Image src={"/ghost.png"} width={25} height={25} alt="Leonardo Bloise" />
                <h1 className="font-bold text-vscode-foreground">leonardo.dev</h1>
            </Link>
        </div>
        <ul className="flex gap-x-6 md:justify-end md:border-vscode-border md:border-b-[1px] md:w-[60%] pr-10">
            <li onClick={() => setOpen(old => !old)} className="flex gap-x-4 items-center justify-center opacity-[50%] hover:opacity-100 cursor-pointer ease-in-out md:hidden">
                {open ? <CloseMenu /> : <HamburguerMenu />}
            </li>
            {links.map(link => {
                return <li key={link.label} className="hidden cursor-pointer md:flex gap-x-4 items-center justify-center opacity-[50%] hover:opacity-100 cursor-pointer ease-in-out">
                    <a href={link.link} className="flex items-center gap-x-4">
                        {link.image}
                        <span className="text-vscode-foreground text-sm mt-0.5 hidden md:inline">{link.label}</span>
                    </a>
                </li>
            })}
            <li className="flex gap-x-4 items-center justify-center opacity-[50%] hover:opacity-100 cursor-pointer ease-in-out">
                <a href="https://github.com/leo-bloise" target="_blank" className="flex gap-x-4 items-center">
                    <GithubIcon width={23} height={23} />
                    <span className="text-vscode-foreground text-sm mt-0.5 hidden md:inline">Projects</span>
                </a>
            </li>
        </ul>
        <nav className={`absolute mt-[40px] left-0 bg-vscode-menu-color h-screen w-screen ${open ? "flex" : "hidden"} flex-col items-center pt-8 md:hidden`}>
            <ul className="flex flex-col gap-y-6">
                {links.map(link => {
                    return <li key={link.label} className="flex cursor-pointer items-center gap-x-3">
                        <a href={link.link} className="flex items-center gap-x-3">
                            {link.image}
                            <span className="text-vscode-foreground font-bold text-sm mt-0.5">{link.label}</span>
                        </a>
                    </li>
                })}
            </ul>
        </nav>
    </div>
}