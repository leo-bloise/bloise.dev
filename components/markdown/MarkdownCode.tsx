import { Props } from "./MarkdownProps";
import Prism from 'react-syntax-highlighter';

type CodeProps = Props & {
    props: any;
}

function captureLanguage(className: string): string {
    const results = /(language)-(.*)$/.exec(className);
    if (!results || results.length < 2) return '';
    return results[2];
}

function buildStyles(multiline: boolean) {
    return {
        "hljs": {
            "display": multiline ? "block": "inline",
            "overflowX": "auto",
            "padding": multiline ? "1rem": "3px",
            "background": "#444",
            "color": "#ddd",
            "borderRadius": multiline ? "5px" : "0px",
        },
        "hljs-keyword": {
            "color": "white",
            "fontWeight": multiline ? "bold": ""
        },
        "hljs-selector-tag": {
            "color": "white",
            "fontWeight": "bold"
        },
        "hljs-literal": {
            "color": "white",
            "fontWeight": "bold"
        },
        "hljs-section": {
            "color": "white",
            "fontWeight": "bold"
        },
        "hljs-link": {
            "color": "white"
        },
        "hljs-subst": {
            "color": "#ddd"
        },
        "hljs-string": {
            "color": "#d88"
        },
        "hljs-title": {
            "color": "#d88",
            "fontWeight": "bold"
        },
        "hljs-name": {
            "color": "#d88",
            "fontWeight": "bold"
        },
        "hljs-type": {
            "color": "#d88",
            "fontWeight": "bold"
        },
        "hljs-attribute": {
            "color": "#d88"
        },
        "hljs-symbol": {
            "color": "#d88"
        },
        "hljs-bullet": {
            "color": "#d88"
        },
        "hljs-built_in": {
            "color": "#d88"
        },
        "hljs-addition": {
            "color": "#d88"
        },
        "hljs-variable": {
            "color": "#d88"
        },
        "hljs-template-tag": {
            "color": "#d88"
        },
        "hljs-template-variable": {
            "color": "#d88"
        },
        "hljs-comment": {
            "color": "#777"
        },
        "hljs-quote": {
            "color": "#777"
        },
        "hljs-deletion": {
            "color": "#777"
        },
        "hljs-meta": {
            "color": "#777"
        },
        "hljs-doctag": {
            "fontWeight": "bold"
        },
        "hljs-strong": {
            "fontWeight": "bold"
        },
        "hljs-emphasis": {
            "fontStyle": "italic"
        }
    };
}

export default function MarkdownCode({ node, props }: CodeProps) {
    if (!node) return <></>;
    const { className, children, ...rest } = props;
    let text = String(children).replace(/\n$/, '');
    if(text === 'undefined') {
        const textChild = node.children?.filter(child => child.type === 'text');
        if(!textChild) {
            return <></>;
        }
        text = textChild[0].value!;
    }
    return <Prism
        {...rest}
        PreTag={typeof children !== 'undefined' ? 'div': 'span'}
        children={text}
        language={captureLanguage(className)}
        style={buildStyles(typeof children !== 'undefined')}
    />
}