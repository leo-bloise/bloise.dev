import SubtitleLink from "./SubtitleLink";
import { TitleSize } from "./titles/TitleSize";

type Props = {
    title: string;
    date: Date;
    url: string;
}

export default function ArticleItem({date, title, url}: Props) {
    const month = new Intl.DateTimeFormat("en-US", {month: 'long'}).format(date);
    const year = date.getFullYear();
    return <li className="ml-8 border-b-vscode-border border-b-[1px] pb-2 last:border-0">
        <SubtitleLink internal size={TitleSize.MEDIUM} url={url}>{title}</SubtitleLink>
        <span className="text-vscode-description">{`${month} ${year}`}</span>
    </li>
}