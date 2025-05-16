import { readFileSync } from "fs";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
    const article = await prisma.article.create({
        data: {
            content: readFileSync('test.md', {
                encoding: 'utf-8'
            }),
            title: 'Teste article'
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