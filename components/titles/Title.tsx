import { TitleSize, titleSizeAdapter } from "./TitleSize";

type Props = {
    children: string;
    size?: TitleSize
}

export default function Title({ children, size = TitleSize.BIG }: Props) {
    return <h1 className={`text-vscode-foreground font-bold ${titleSizeAdapter(size)} underline decoration-wavy decoration-vscode-error underline-offset-[10px]`}>
        {children}
    </h1>
}

