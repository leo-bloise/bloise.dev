export default function Paragraph({ children }: { children: string }) {
    return <p className="text-vscode-foreground text-lg">
        {children}
    </p>
}