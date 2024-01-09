export class StackClass<T> {
    public storage: T[];

    constructor() {
        this.storage = []
    }

    previewStorage(): T[] | string {
        return this.storage?.length ? this.storage : "нет значения"
    }

    push(item: T) {
        this.storage.push(item)
    }

    length(): number | string {
        return this.storage?.length ? this.storage.length : "в массиве нет значений"
    }
}
