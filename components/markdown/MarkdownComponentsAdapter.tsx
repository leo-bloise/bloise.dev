import { Components } from "react-markdown";
import MarkdownTitle from "./MarkdownTitle";
import { MarkdownElement } from "@/@types/MarkdownElement";
import MarkdownParagraph from "./MarkdownParagraph";
import MarkdownSubtitle from "./MarkdownSubtitle";
import MarkdownLink from "./MarkdownLink";
import MarkdownCode from "./MarkdownCode";

export class MarkdownComponentsAdapter {
    private static instance: MarkdownComponentsAdapter | undefined;
    static getInstance(): MarkdownComponentsAdapter {
        if(this.instance) return this.instance;
        this.instance = new MarkdownComponentsAdapter();
        return this.instance;
    }
    adapt(): Components {
        return {
            h1: ({ node }) => <MarkdownTitle node={node as MarkdownElement | undefined} />,
            p: ({node}) => <MarkdownParagraph node={node as MarkdownElement | undefined}/>,
            h2: ({node}) => <MarkdownSubtitle node={node as MarkdownElement | undefined}/>,
            a: ({node}) => <MarkdownLink node={node as MarkdownElement | undefined}/>,
            code: ({node, ...props}) => <MarkdownCode props={props} node={node as MarkdownElement | undefined}></MarkdownCode>
        }
    }
}