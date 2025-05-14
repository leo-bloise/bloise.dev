import { RepositoryDTO } from "../dto/RepositoryDTO";

export interface IGithubService {
    getUsername(): Promise<string>;
    getRepositories(qtt?: number): Promise<RepositoryDTO[]>;
}