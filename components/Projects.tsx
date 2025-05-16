import useGithubService from "@/server/useGithubService"
import Paragraph from "./Paragraph";
import SubtitleLink from "./SubtitleLink";
import NoContent from "./NoContent";

export default async function Projects() {
    const githubService = useGithubService();
    const repositories = await githubService.getRepositories();
    if(repositories.length === 0) return <NoContent />
    return <article className="flex flex-col gap-y-6 pt-4">
        {repositories.map(repository => <div key={repository.id} className="border-vscode-border border rounded-md p-4 flex flex-col gap-y-4">
            <span className="text-vscode-description">{repository.createdAt.getFullYear()}</span>
            <SubtitleLink url={repository.url}>{repository.name}</SubtitleLink>
            <Paragraph className="text-sm">{repository.description}</Paragraph>
        </div>)}
    </article>
} 