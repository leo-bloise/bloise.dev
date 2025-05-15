import { Article } from "../database/entities/Article";

export interface IArticleService {
    findAllArticles(): Promise<Article[]>;
    findTopArticles(): Promise<Article[]>;
    findArticle(id: number): Promise<Article | undefined>;
}