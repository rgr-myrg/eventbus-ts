import {Event} from './Event';

export class EventBus {
    private static instance: EventBus;
    public static Event = Event;

    observers: any[] = [];

    public register(observer: any): void {
        if (typeof observer === 'object') {
            this.observers.push(observer);
        }
    }

    public unregister(observer: any): void {
        this.observers = this.observers.filter(item => item !== observer);
    }

    // public post(event: Event<any>): void {
    //     for (let i = this.observers.length; i--;) {
    //         let observer: any = this.observers[i];
    //         let handler: string = '__on' + event.constructor.name;
    //         let data: any = event.getData();
    //
    //         if (typeof observer[handler] === 'function') {
    //             observer[handler].call(observer, data);
    //         }
    //     }
    // }

    public post(event: Event<any>): void {
        for (let i = this.observers.length; i--;) {
            let observer: any = this.observers[i];
            let data: any = event.getData();

            if (observer.__eventbus && observer.__eventbus[event.constructor.name]) {
                let eventHandlers: Function[] = observer.__eventbus[event.constructor.name];

                eventHandlers.forEach(item => {
                    item.call(observer, data);
                });
            }
        }
    }

    public static getDefault() {
        return this.instance || (this.instance = new this());
    }
}
