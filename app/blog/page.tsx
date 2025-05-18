import PageBlogArticles from "@/components/PageBlogArticles";
import Skeleton from "@/components/Skeleton";
import Title from "@/components/titles/Title";
import useArticleService from "@/server/useArticleService";
import { Suspense } from "react";

type Props = { 
    searchParams: Promise<{
        skip?: string,
        take?: string
    }>
}

function parseNullableStringNumbers(defaultValue: number, text?: string): number {
    if(!text) return defaultValue;
    const value = Number.parseInt(text);
    if(Number.isNaN(value) || !Number.isInteger(value) || value < 0) return defaultValue;
    return value;
}

export default async function Page(data: Props) {
    const searchParams = await data.searchParams;
    const { skip, take } = searchParams;
    const articleService = useArticleService();
    const articles = articleService.getPage(
        parseNullableStringNumbers(0, skip),
        parseNullableStringNumbers(10, take)
    );
    return <div className="flex flex-col gap-y-6">
        <Title>Blog</Title>
        <Suspense fallback={<Skeleton height={150} qtt={2} />}>
            <PageBlogArticles articlesPromise={articles}/>
        </Suspense>
    </div>
}