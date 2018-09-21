"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Event {
    constructor(data) {
        this.data = data;
        this.name = '[assign in subclass]';
    }
    getName() {
        return this.name;
    }
    getData() {
        return this.data;
    }
    typeof() {
        return typeof this.data;
    }
}
exports.Event = Event;
//# sourceMappingURL=Event.js.map