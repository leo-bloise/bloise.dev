import Paragraph from "@/components/Paragraph";
import Title from "@/components/titles/Title";

export default function NotFound() {
    return (
        <main className="flex flex-col mt-6 gap-y-6 items-center justify-center">
            <Title>404</Title>
            <Paragraph>Not found</Paragraph>
        </main>
    );
}