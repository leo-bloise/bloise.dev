import { Components } from "react-markdown";
import MarkdownTitle from "./MarkdownTitle";
import { MarkdownElement } from "@/@types/MarkdownElement";
import MarkdownParagraph from "./MarkdownParagraph";
import MarkdownSubtitle from "./MarkdownSubtitle";
import MarkdownLink from "./MarkdownLink";
import MarkdownCode from "./MarkdownCode";
import MarkdownImage from "./MarkdownImage";

export class MarkdownComponentsAdapter {
    private static instance: MarkdownComponentsAdapter | undefined;
    static getInstance(): MarkdownComponentsAdapter {
        if(this.instance) return this.instance;
        this.instance = new MarkdownComponentsAdapter();
        return this.instance;
    }
    private generateRandomNumber() {
        return Math.floor(
            (Math.random() * 10 + 1) - 1
        ) 
    }
    private generateRandomArray() {
        const size = this.generateRandomNumber();
        const arr: number[] = [];
        for(let i = 0; i < size; i++) arr.push(this.generateRandomNumber());
        return arr;
    }
    private generateRandomKey() {
        return Buffer.from(this.generateRandomArray()).toString('hex');
    }
    adapt(): Components {        
        return {
            h1: ({ node }) => <MarkdownTitle key={this.generateRandomKey()} node={node as MarkdownElement | undefined} />,
            p: ({node}) => <MarkdownParagraph key={this.generateRandomKey()} node={node as MarkdownElement | undefined}/>,
            h2: ({node}) => <MarkdownSubtitle key={this.generateRandomKey()} node={node as MarkdownElement | undefined}/>,
            a: ({node}) => <MarkdownLink key={this.generateRandomKey()} node={node as MarkdownElement | undefined}/>,
            code: ({node, ...props}) => <MarkdownCode key={this.generateRandomKey()} props={props} node={node as MarkdownElement | undefined}></MarkdownCode>,
            img: ({node, ...props}) => <MarkdownImage key={this.generateRandomKey()} node={node as MarkdownElement | undefined}></MarkdownImage>
        }
    }
}