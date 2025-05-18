import { PrismaClient } from "@/generated/prisma";
import { Article } from "../entities/Article";
import { IRepository } from "../IRepository";
import { PageDTO } from "@/server/dto/PageDTO";

export class ArticleRepository implements IRepository<Article, number> {
    constructor(
        private prisma: PrismaClient
    ) {}
    async getPage(skip: number = 0, take: number = 10): Promise<PageDTO<Article>> {
        const data = await this.prisma.article.findMany({
            skip,
            take
        })
        return {data, skip, take};
    }
    async findById(id: number): Promise<Article | undefined> {
        const article = await this.prisma.article.findFirst({
            where: {
                id
            }
        });
        if(article === null) return undefined;
        return this.parse([article]).at(0);
    }
    private parse(entities: {
        id: number,
        content: string,
        createdAt: Date,
        title: string
    }[]): Article[] {
        return entities.map(e => new Article(
            e.id,
            e.createdAt,
            e.content,
            e.title
        ));
    }
    async findAll(): Promise<Article[]> {
        const articlePrisma = await this.prisma.article.findMany();
        return this.parse(articlePrisma);
    }
    async mostRecent(take: number = 5): Promise<Article[]> {
        const articles = await this.prisma.article.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            take
        });
        return this.parse(articles);
    }
}