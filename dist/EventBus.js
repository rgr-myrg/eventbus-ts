"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    EventBus.prototype.post = function (event) {
        for (var i = this.observers.length; i--;) {
            var observer = this.observers[i];
            var handler = '__on' + event.constructor.name;
            var data = event.getData();
            if (typeof observer[handler] === 'function') {
                observer[handler].call(observer, data);
            }
        }
    };
    EventBus.getDefault = function () {
        return this.instance || (this.instance = new this());
    };
    return EventBus;
}());
exports.EventBus = EventBus;
//# sourceMappingURL=EventBus.js.map