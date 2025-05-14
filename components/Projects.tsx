import useGithubService from "@/server/useGithubService"
import ExternalLink from "./Link";
import Paragraph from "./Paragraph";

export default async function Projects() {
    const githubService = useGithubService();
    const repositories = await githubService.getRepositories();
    return <article className="flex flex-col gap-y-6 pt-4">
        {repositories.map(repository => <div key={repository.id} className="border-vscode-border border rounded-md p-4 flex flex-col gap-y-4">
            <span className="text-vscode-description">{repository.createdAt.getFullYear()}</span>
            <ExternalLink url={repository.url}>
                <p className="text-vscode-link hover:underline text-lg font-bold">{repository.name}</p>
            </ExternalLink>
            <Paragraph className="text-sm">{repository.description}</Paragraph>
        </div>)}
    </article>
} 