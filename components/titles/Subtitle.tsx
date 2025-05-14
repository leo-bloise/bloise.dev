import { HTMLAttributes } from "react";
import { TitleSize, titleSizeAdapter } from "./TitleSize";

type Props = {
    children: string;
    size?: TitleSize;
    heading?: SubtitleHeading
}

export enum SubtitleHeading {
    H2,
    H3,
}
function factory(text: string, attr: HTMLAttributes<HTMLHeadingElement>, heading: SubtitleHeading) {
    switch(heading) {
        case SubtitleHeading.H2:
            return <h2 {...attr}>
                {text}
            </h2>
        case SubtitleHeading.H3:
            return <h3 {...attr}>
                {text}
            </h3>
    }
}

export default function Subtitle({ children, size = TitleSize.MEDIUM, heading = SubtitleHeading.H2}: Props) {
    const mustHaveWavyEffect = size !== TitleSize.SMALL
    return factory(children, 
        {
            className: `text-vscode-foreground font-bold ${titleSizeAdapter(size)} ${mustHaveWavyEffect ? "underline decoration-wavy decoration-vscode-error underline-offset-[10px]": ""}`
        }, heading);
}