export interface IRepository<T extends Object, ID> {
    findAll(): Promise<T[]>;
    mostRecent(quantity: number): Promise<T[]>;
    findById(id: number): Promise<T | undefined>;
}