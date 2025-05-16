import { Url } from "next/dist/shared/lib/router/router";
import InternalLink from "./InternalLink";
import ExternalLink from "./Link";
import { TitleSize } from "./titles/TitleSize";

type Props = {
    url: string;
    children: string;
    size?: TitleSize;
    internal?: boolean;
}

function adapt(size: TitleSize) {
    switch(size) {
        case TitleSize.BIG:
            return 'text-lg';
        case TitleSize.MEDIUM:
            return 'text-md';
        case TitleSize.SMALL:
            return 'text-sm';
    }
}

export default function SubtitleLink({ internal = false, children, url, size = TitleSize.BIG}: Props) {
    if(internal) return <InternalLink href={url}>
        <p className={`text-vscode-link hover:underline ${adapt(size)} font-bold`}>{children}</p>
    </InternalLink>
    return <ExternalLink url={url}>
        <p className={`text-vscode-link hover:underline ${adapt(size)} font-bold`}>{children}</p>
    </ExternalLink>
}