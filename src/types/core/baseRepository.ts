export type BaseRepository<T> = {
    insertOne(data: T): Promise<T>;
    find(): Promise<T[]>;
    findOne(id: string): Promise<T>;
    updateOne(id: string, data: T): Promise<T>;
    deleteOne(id: string): Promise<void>;
}

