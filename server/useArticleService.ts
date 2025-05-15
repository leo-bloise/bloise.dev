import { client } from "./database/client";
import { ArticleRepository } from "./database/repositories/ArticleRepository";
import { ArticleService } from "./services/ArticleService";
import { IArticleService } from "./services/IArticleService";

export default function useArticleService(): IArticleService {
    return new ArticleService(new ArticleRepository(client));
}