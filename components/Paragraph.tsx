import { ReactNode } from "react"

type Props = {
    children: ReactNode;
    className?: string;
}

export default function Paragraph({ children, className = undefined }: Props) {    
    return <p className={`text-vscode-foreground text-lg ${className ?? ''}`}>
        {children}
    </p>
}