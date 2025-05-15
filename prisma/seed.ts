import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
    const article = await prisma.article.create({
        data: {
            content: `
                # Markdown file2222
                Markdown file storing some text that sould be parsed to HTML
            `
        }
    });
    console.log(`Article of ID: ${article.id} was created`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
        process.exit(0);
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });