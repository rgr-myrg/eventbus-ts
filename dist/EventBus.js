"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Event_1 = require("./Event");
var EventBus = /** @class */ (function () {
    function EventBus() {
        this.observers = [];
    }
    EventBus.prototype.register = function (observer) {
        if (typeof observer === 'object') {
            this.observers.push(observer);
        }
    };
    EventBus.prototype.unregister = function (observer) {
        this.observers = this.observers.filter(function (item) { return item !== observer; });
    };
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
    EventBus.prototype.post = function (event) {
        var _loop_1 = function (i) {
            var observer = this_1.observers[i];
            var data = event.getData();
            if (observer.__eventbus && observer.__eventbus[event.constructor.name]) {
                var eventHandlers = observer.__eventbus[event.constructor.name];
                eventHandlers.forEach(function (item) {
                    item.call(observer, data);
                });
            }
        };
        var this_1 = this;
        for (var i = this.observers.length; i--;) {
            _loop_1(i);
        }
    };
    EventBus.getDefault = function () {
        return this.instance || (this.instance = new this());
    };
    EventBus.Event = Event_1.Event;
    return EventBus;
}());
exports.EventBus = EventBus;
//# sourceMappingURL=EventBus.js.map