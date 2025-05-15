export interface IRepository<T, ID> {
    findAll(): Promise<T[]>
}