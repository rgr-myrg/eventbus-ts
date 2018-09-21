import { Event } from './Event';
export declare class EventBus {
    private static instance;
    observers: any[];
    register(observer: any): void;
    unregister(observer: any): void;
    post(event: Event<any>): void;
    static getDefault(): EventBus;
}
