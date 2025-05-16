import React from "react";
import { Props } from "./MarkdownProps";

export default function MarkdownTitle({ node }: Props) {
    if(!node) return <></>;
    if(!node.children) return <></>;
    const textNode = node.children.filter(child => child.type === 'text');
    if(textNode.length == 0) return <></>;
    return <h1 className="text-4xl font-bold text-vscode-foreground">
        {textNode[0].value}
    </h1>
}