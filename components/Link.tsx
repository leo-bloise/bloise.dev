import { ReactNode } from "react";

type Props = {
    url: string;
    children: ReactNode;
    className?: string;
}

export default function ExternalLink({ url, children, className = ""}: Props) {
    return <a target="_blank" className={className} href={url}>{children}</a>
}