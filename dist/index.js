"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventBus_1 = require("./EventBus");
exports.EventBus = EventBus_1.EventBus;
function Subscribe(eventClassName) {
    return function (target, _propertyKey, descriptor) {
        var handlerName = '__on' + eventClassName;
        Object.defineProperty(target, handlerName, descriptor);
    };
}
exports.Subscribe = Subscribe;
//# sourceMappingURL=index.js.map