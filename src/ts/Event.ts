export class Event<T> {
    name: string = '[assign in subclass]';

    constructor(public data: T) {}

    getName(): string {
        return this.name;
    }

    getData(): T {
        return this.data;
    }

    typeof(): string {
        return typeof this.data;
    }
}
