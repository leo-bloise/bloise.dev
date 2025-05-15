import { Article } from "../database/entities/Article";
import { IRepository } from "../database/IRepository";
import { IArticleService } from "./IArticleService";

export class ArticleService implements IArticleService {
    constructor(
        private repository: IRepository<Article, number>
    ) {}
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