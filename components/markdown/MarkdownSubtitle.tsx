import { MarkdownElement } from "@/@types/MarkdownElement";
import { Props } from "./MarkdownProps";

export default function MarkdownSubtitle({ node }: Props) {
    if(!node) return <></>;
    if(!node.children) return <></>;
    const textNode = node.children.filter(child => child.type === 'text');
    if(textNode.length == 0) return <></>;
    return <h2 className="text-2xl text-vscode-foreground font-semibold">
        {textNode[0].value}
    </h2>
}