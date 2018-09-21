import {Event} from './Event';

export class EventBus {
    private static instance: EventBus;
    observers: any[] = [];

    public register(observer: any): void {
        if (typeof observer === 'object') {
            this.observers.push(observer);
        }
    }

    public unregister(observer: any): void {
        this.observers = this.observers.filter(item => item !== observer);
    }

    public post(event: Event<any>): void {
        for (let i = this.observers.length; i--;) {
            let observer: any = this.observers[i];
            let handler: string = 'on' + event.getName();

            if (typeof observer[handler] === 'function') {
                observer[handler].call(observer, event.getData());
            }
        }
    }

    public static getDefault() {
        return this.instance || (this.instance = new this());
    }
}
