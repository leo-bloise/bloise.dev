export class Article {
    constructor(
        public id: number,
        public createdAt: Date,
        public content: string,
        public title: string
    ) {}
}