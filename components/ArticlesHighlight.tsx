import useArticleService from "@/server/useArticleService";
import ArticleItem from "./ArticleItem";
import NoContent from "./NoContent";

export default async function ArticlesHighlight() {
    const articleService = useArticleService();
    const articles = await articleService.findTopArticles();
    if(articles.length === 0) return <NoContent />
    return <div className="border-l-vscode-border border-l-2 p-2">
        <ul className="flex flex-col gap-y-4">
            {articles.map(article => <ArticleItem key={article.id} date={article.createdAt} title={article.title} url={`/blog/${article.id}`}></ArticleItem>)}
        </ul>
    </div>
}