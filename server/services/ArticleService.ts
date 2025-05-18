import { Article } from "../database/entities/Article";
import { IRepository } from "../database/IRepository";
import { PageDTO } from "../dto/PageDTO";
import { IArticleService } from "./IArticleService";

export class ArticleService implements IArticleService {
    constructor(
        private repository: IRepository<Article, number>
    ) {}
    getPage(skip: number = 0, take: number = 10): Promise<PageDTO<Article>> {
        return this.repository.getPage(skip, take);
    }
    async findArticle(id: number): Promise<Article | undefined> {
        return this.repository.findById(id);
    }
    async findTopArticles(): Promise<Article[]> {
        return this.repository.mostRecent(5);   
    }
    async findAllArticles(): Promise<Article[]> {
        return this.repository.findAll();
    }

}