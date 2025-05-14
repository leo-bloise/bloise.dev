import Image from "next/image";
import GithubIcon from "./icons/GithubIcon";

export default function Menu() {
    return <div className="flex p-4 border-b-[1px] justify-around border-vscode-border">
        <div className="flex items-center gap-x-4">
            <Image src={"/ghost.png"} width={25} height={25} alt="Leonardo Bloise" />
            <h1 className="font-bold text-vscode-foreground">leonardo.dev</h1>
        </div>
        <ul>
            <li className="flex gap-x-4 items-center justify-center">
                <GithubIcon width={25} height={25}/>
                <span className="text-vscode-foreground text-sm mt-0.5 hidden md:inline">Projects</span>
            </li>
        </ul>
    </div>
}