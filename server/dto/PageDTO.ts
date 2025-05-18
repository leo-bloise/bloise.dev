export type PageDTO<T> = {
    data: T[],
    skip: number,
    take: number
}