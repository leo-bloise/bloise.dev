import { PageDTO } from "../dto/PageDTO";

export interface IRepository<T extends Object, ID> {
    findAll(): Promise<T[]>;
    mostRecent(quantity: number): Promise<T[]>;
    findById(id: number): Promise<T | undefined>;
    getPage(skip: number, take: number): Promise<PageDTO<T>>
}