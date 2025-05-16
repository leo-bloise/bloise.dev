import Paragraph from "./Paragraph";
import Subtitle from "./titles/Subtitle";
import { TitleSize } from "./titles/TitleSize";

export default function Sidebar() {
    return <section className="w-[15%] h-[100%] sidebar -z-10 bg-vscode-menu-color fixed p-4 pt-20">
        <div className="p-4 gap-y-4 flex flex-col">
            <Subtitle size={TitleSize.SMALL}>
                About me
            </Subtitle>
            <Paragraph className="text-sm">
                I'm <strong className="text-vscode-error">Leo</strong>, software developer and bug hunter. This is my digital spot on the web.
            </Paragraph>
        </div>
    </section>
}