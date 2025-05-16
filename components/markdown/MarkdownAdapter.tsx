import Markdown from "react-markdown";
import { MarkdownComponentsAdapter } from "./MarkdownComponentsAdapter";

type Props = {
    children: string;
}

export default function MarkdownAdapter({ children }: Props) {
    return <Markdown remarkPlugins={[]} components={MarkdownComponentsAdapter.getInstance().adapt()}>
        {children}
    </Markdown>
}