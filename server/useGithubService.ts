import { GithubService } from "./services/GithubService";
import { IGithubService } from "./services/IGithubService";

let githubService: IGithubService | null = null;

export default function useGithubService(): IGithubService {
    if(githubService !== null) return githubService;
    const { GITHUB_TOKEN } = process.env;
    if(GITHUB_TOKEN === undefined) throw new Error('no GITHUB_TOKEN defined');
    githubService = new GithubService(GITHUB_TOKEN);
    return githubService;
}