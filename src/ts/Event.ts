export class Event<T> {
    constructor(public data: T) {}

    getData(): T {
        return this.data;
    }

    typeof(): string {
        return typeof this.data;
    }
}
