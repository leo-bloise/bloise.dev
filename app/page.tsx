import Paragraph from "@/components/Paragraph"

export default function Home() {
  return (
    <div className="max-w-[740px]">
      <div className="p-4">
        <header className="flex flex-col gap-y-5">
          <h1 className="text-vscode-foreground font-bold text-4xl underline decoration-wavy decoration-vscode-error underline-offset-[10px]">
            Hey, I'm Leo!
          </h1>
          <Paragraph>
            I'm a software developer, bug creator, and, sometimes, a good friend. I've been coding since 2016 and, almost 9 years later, I still get stuck inside vim.
          </Paragraph>
          <Paragraph>
            I like to watch animes, hang out with friends in Discord and re-create stuff from scratch.
          </Paragraph>
        </header>
      </div>
    </div>
  );
}
