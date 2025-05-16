import ExternalLink from "../Link";
import { Props } from "./MarkdownProps";

export default function MarkdownLink({ node }: Props) {
    if(!node) return <></>;
    if(!node.properties) return <></>;
    const { href } = node.properties;
    if(!href) return <></>;
    const textChild = node.children?.filter(child => child.type === 'text');
    if(!textChild) return <></>;
    const textElement = textChild.at(0);
    if(!textElement) return <></>;    
    return <ExternalLink 
        className="text-vscode-link underline underline-offset-6 font-bold"
        url={href}>{textElement.value}</ExternalLink>
}