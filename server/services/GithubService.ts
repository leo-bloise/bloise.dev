import { Octokit } from "octokit";
import { IGithubService } from "./IGithubService";
import { RepositoryDTO } from "../dto/RepositoryDTO";

export class GithubService implements IGithubService {
    private octokit: Octokit;
    private _username: string | undefined;
    constructor(token: string) {
        this.octokit = new Octokit({
            auth: token
        });
    }
    async getRepositories(qtt: number = 5): Promise<RepositoryDTO[]> {
        const { data: repos } = await this.octokit.rest.repos.listForUser({
            username: await this.getUsername(),
            per_page: qtt,
            page: 1,
        });
        const reposCache = repos.map(repo => ({
            createdAt: new Date(repo.created_at!),
            description: repo.description,
            fullname: repo.full_name,
            name: repo.name,
            url: repo.html_url,
            id: repo.id.toString()
        } as RepositoryDTO));
        return reposCache;
    }
    async getUsername(): Promise<string> {
        if(this._username) {
            return this._username;
        }
        const authenticated = await this.octokit.rest.users.getAuthenticated();
        this._username = authenticated.data.login;
        return this._username;
    }
}