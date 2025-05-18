import { Article } from "../database/entities/Article";
import { PageDTO } from "../dto/PageDTO";

export interface IArticleService {
    findAllArticles(): Promise<Article[]>;
    findTopArticles(): Promise<Article[]>;
    findArticle(id: number): Promise<Article | undefined>;
    getPage(skip?: number, take?: number): Promise<PageDTO<Article>>;
}