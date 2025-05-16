import Image from "next/image";

export default function NoContent() {
    return <div className="flex items-center">
        <Image src={"/no-content.png"} width={200} height={200} alt="No content"></Image>
        <span className="text-vscode-description font-bold"> Oops! Nothing to see here</span>
    </div>
}