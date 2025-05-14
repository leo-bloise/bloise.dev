import { ReactNode } from "react";

type Props = {
    url: string;
    children: ReactNode;
}

export default function ExternalLink({ url, children }: Props) {
    return <a target="_blank" href={url}>{children}</a>
}