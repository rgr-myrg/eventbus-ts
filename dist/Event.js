"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Event = /** @class */ (function () {
    function Event(data) {
        this.data = data;
    }
    Event.prototype.getData = function () {
        return this.data;
    };
    Event.prototype.typeof = function () {
        return typeof this.data;
    };
    return Event;
}());
exports.Event = Event;
//# sourceMappingURL=Event.js.map