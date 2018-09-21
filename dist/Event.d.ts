export declare class Event<T> {
    data: T;
    name: string;
    constructor(data: T);
    getName(): string;
    getData(): T;
    typeof(): string;
}
