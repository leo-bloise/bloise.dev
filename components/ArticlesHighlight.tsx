import ArticleItem from "./ArticleItem";

export default function ArticlesHighlight() {
    return <div className="border-l-vscode-border border-l-2 p-2">
        <ul className="flex flex-col gap-y-4">
            <ArticleItem 
                url=""
                date={new Date()}
                title="Enabling Apache ECharts in React for Data Visualization"
            />
            <ArticleItem 
                url=""
                date={new Date()}
                title="Enabling Apache ECharts in React for Data Visualization"
            />
            <ArticleItem 
                url=""
                date={new Date()}
                title="Enabling Apache ECharts in React for Data Visualization"
            />
            <ArticleItem 
                url=""
                date={new Date()}
                title="Enabling Apache ECharts in React for Data Visualization"
            />
        </ul>
    </div>
}