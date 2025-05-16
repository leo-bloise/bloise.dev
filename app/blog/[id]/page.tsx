
import MarkdownAdapter from "@/components/markdown/MarkdownAdapter";
import fs from 'fs';
import useArticleService from "@/server/useArticleService";
import { notFound } from "next/navigation";

type Params = {
    params: Promise<{
        id: string;
    }>
};

export default async function Page({ params }: Params) {
    const { id } = await params;
    const articleService = useArticleService();
    const idParsed = Number.parseInt(id, 10)
    if (Number.isNaN(idParsed) || idParsed <= 0) {
        return notFound();
    }
    const article = await articleService.findArticle(idParsed);
    if (!article) {
        return notFound();
    }
    return <main>
        <article>
            <MarkdownAdapter>{article.content}</MarkdownAdapter>
        </article>
        <section className="hidden"></section>
    </main>
}