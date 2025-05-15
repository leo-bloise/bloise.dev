import ExternalLink from "./Link";
import { TitleSize } from "./titles/TitleSize";

type Props = {
    url: string;
    children: string;
    size?: TitleSize;
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

export default function SubtitleLink({ children, url, size = TitleSize.BIG}: Props) {
    return <ExternalLink url={url}>
        <p className={`text-vscode-link hover:underline ${adapt(size)} font-bold`}>{children}</p>
    </ExternalLink>
}