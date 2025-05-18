'use client';
import { Article } from "@/generated/prisma"
import { PageDTO } from "@/server/dto/PageDTO"
import { ReactNode, use, useCallback } from "react";
import SubtitleLink from "./SubtitleLink";
import { useRouter } from "next/navigation";
import NoContent from "./NoContent";

const formatter = new Intl.DateTimeFormat("en-US", { month: 'long', day: '2-digit' });

type Props = {
    articlesPromise: Promise<PageDTO<Article>>
}

function ArticleList({ year, articles }: { year: string, articles: Article[] }) {
    return <div className="flex flex-col border-l-vscode-border">
        <p className="text-3xl font-bold text-vscode-foreground border-l-vscode-badge border-l-[3px] pl-4">{year}</p>
        <ul className="pl-6 pt-4 border-l-2 border-l-vscode-border flex flex-col gap-y-6">
            {
                articles.map(d => <li key={d.id} className="not-last:border-b-[1px] pb-2 border-b-vscode-border">
                    <SubtitleLink url={"/blog/" + d.id}>{d.title}</SubtitleLink>
                    <span className="text-vscode-description">{formatter.format(d.createdAt)}</span>
                </li>)
            }
        </ul>
    </div>;
}

function renderNodes(nodes: ReactNode[], nextPage: () => void) {
    return <>
        {...nodes}
        <div>
            <button onClick={nextPage} className="border-vscode-border border-[1px] p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-move-right-icon lucide-move-right stroke-vscode-description"
                >
                    <path d="M18 8L22 12L18 16" /><path d="M2 12H22" />
                </svg>
            </button>
        </div>
    </>
}

function sortEntries(iterator: MapIterator<[number, Article[]]>) {
    const sortedArray: [number, Article[]][] = []
    for (const [year, data] of iterator) {
        sortedArray.push(
            [
                year,
                data
            ]
        );
    }
    return sortedArray.sort((a, b) => b[0] - a[0]);
}

export default function PageBlogArticles({ articlesPromise }: Props) {
    const router = useRouter();
    const byYear: Map<number, Article[]> = new Map();
    const articles = use(articlesPromise);
    const { skip, take } = articles;
    const nextPage = useCallback(() => {
        const nextPageRoute = `/blog?skip=${skip + take}&take=${take}`;
        router.push(nextPageRoute);
    }, [skip, take]);
    articles.data.forEach(article => {
        const year = article.createdAt.getFullYear();
        if (byYear.has(year)) {
            byYear.get(year)?.push(article);
            return;
        }
        byYear.set(year, [article]);
    });
    const nodes: ReactNode[] = [];
    for (const [year, data] of sortEntries(byYear.entries())) {
        nodes.push(<ArticleList articles={data} year={year.toString()}></ArticleList>)
    }    
    return <div className="flex flex-col mt-8 gap-y-12 mb-8">
        {nodes.length > 0 ? renderNodes(nodes, nextPage) : <NoContent />}
    </div>
}