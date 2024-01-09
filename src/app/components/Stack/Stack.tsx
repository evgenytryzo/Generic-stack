import S from "./Stack.module.scss"

export class StackClass<T> {
    public storage: T[];

    constructor(storage: T[]) {
        this.storage = storage
    }

    previewStorage(): T[] | string {
        return this.storage?.length ? this.storage : "нет значения"
    }
}
