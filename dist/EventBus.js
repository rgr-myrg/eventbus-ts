"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventBus {
    constructor() {
        this.observers = [];
    }
    register(observer) {
        if (typeof observer === 'object') {
            this.observers.push(observer);
        }
    }
    unregister(observer) {
        this.observers = this.observers.filter(item => item !== observer);
    }
    post(event) {
        for (let i = this.observers.length; i--;) {
            let observer = this.observers[i];
            let handler = 'on' + event.constructor.name;
            let data = event.getData();
            if (typeof observer[handler] === 'function') {
                observer[handler].call(observer, data);
            }
        }
    }
    static getDefault() {
        return this.instance || (this.instance = new this());
    }
}
exports.EventBus = EventBus;
//# sourceMappingURL=EventBus.js.map