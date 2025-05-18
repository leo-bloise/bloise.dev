import { readFileSync } from "fs";
import { PrismaClient } from "../generated/prisma";
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const years = ['2025', '2024', '2023'];
const months = ['01', '02', '03', '04'];
const days = ['30','20','10','01'];

function getRandom(from: number, to: number) {
    return Math.floor(((Math.random() * to) - from )+ from);
}

function getRandomMonth() {
    return months[getRandom(0, months.length)];
}
function getRandomYear() {
    return years[getRandom(0, years.length)]
}
function getRandomDay() {
    return days[getRandom(0, days.length)];
}
function buildRandomDate() {
    return new Date(`${getRandomYear()}-${getRandomMonth()}-${getRandomDay()}`);
}

async function main() {
    let i = 0;
    while(i < 1000) {
        const article = await prisma.article.create({
            data: {
                content: readFileSync('test.md', {
                    encoding: 'utf-8'
                }),
                title: faker.book.title(),
                createdAt: buildRandomDate()
            }
        });
        console.log(`Article of ID: ${article.id} was created`);
        i++;
    }
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