export type MarkdownElement = {
    type: string;
    tagName?: string;
    value?: string;
    properties?: {
        href?: string;
        src?: string;
        alt?: string;
    },
    children?: Array<MarkdownElement>,
    position: {
        start: {
            line: number,
            column: number,
            offset: number
        },
        end: {
            line: number,
            column: number,
            offset: number
        }
    }
}