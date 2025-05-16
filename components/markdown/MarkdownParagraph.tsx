import { ReactNode } from "react";
import { Props } from "./MarkdownProps"
import { MarkdownComponentsAdapter } from "./MarkdownComponentsAdapter";
import { Components } from "react-markdown";
import { MarkdownElement } from "@/@types/MarkdownElement";

function ReactMarkdownParagraph({ children }: { children: ReactNode[]}) {
    return <p className="text-vscode-foreground text-lg mt-4 mb-4">
        {children}
    </p>
}

export default function MarkdownParagraph({ node }: Props) {    
    if(!node) return <></>
    const elements: ReactNode[] = [];
    node.children?.forEach(child => {
        const { type, value, tagName } = child;
        switch(type) {
            case 'text':
                elements.push(value as string);
                break;
            case 'element':
                const componentBuilder = MarkdownComponentsAdapter.getInstance().adapt()[tagName as keyof Components] as ({}: { node: MarkdownElement }) => ReactNode;
                if(!componentBuilder) {
                    console.error(`No component builder found for ${tagName}`);
                    break;
                }
                const component = componentBuilder({node: child});
                elements.push(component);
                break;
            default:
                console.log(child);
        }
    });
    return <ReactMarkdownParagraph>
        {elements}
    </ReactMarkdownParagraph>
}