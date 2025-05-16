import Image from "next/image";
import { Props } from "./MarkdownProps";

export default function MarkdownImage({ node }: Props) {
    if(!node || !node.properties) return <></>;
    let { alt, src } = node.properties;
    if(!src) return <></>;
    if(!alt) {
        alt = 'Please, define an alternative text';
    }
    return <img className="border-vscode-border border-2 rounded-md" src={src} alt={alt} style={{
        minWidth: 200,
        maxWidth: 600,
        width: '100%',
        display: 'block',
        margin: 'auto',
        marginTop: 30,
        marginBottom: 30
    }}></img>
}