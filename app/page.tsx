import ArticlesHighlight from "@/components/ArticlesHighlight";
import Paragraph from "@/components/Paragraph"
import Projects from "@/components/Projects";
import Skeleton from "@/components/Skeleton";
import Subtitle from "@/components/titles/Subtitle";
import Title from "@/components/titles/Title";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="max-w-[740px]">
      <div className="p-4 flex flex-col gap-y-6">
        <header className="flex flex-col gap-y-5">
          <Title>Hey, I'm Leo!</Title>
          <Paragraph>
            I'm a software developer, bug creator, and, sometimes, a good friend. I've been coding since 2016 and, almost 9 years later, I still get stuck inside vim.
          </Paragraph>
          <Paragraph>
            I like to watch animes, hang out with friends in Discord and re-create stuff from scratch.
          </Paragraph>
        </header>
        <main className="flex flex-col gap-y-4">
          <section>
            <header>
              <Subtitle>Projects</Subtitle>
            </header>
            <article className="mt-4">
              <p className="text-vscode-description">Open-source projects that I've worked on or personal projects I created by myself</p>
              <Suspense fallback={<Skeleton containerStyle="mt-4" height={150} qtt={3} />}>
                <Projects />
              </Suspense>
            </article>
          </section>
          <section>
            <header>
              <Subtitle>Articles</Subtitle>
            </header>
            <article className="mt-4 flex flex-col gap-y-6">
              <p className="text-vscode-description">Stuff I'm talking about</p>
              <ArticlesHighlight />
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}
