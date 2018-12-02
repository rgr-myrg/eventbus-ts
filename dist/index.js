"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventBus_1 = require("./EventBus");
exports.EventBus = EventBus_1.EventBus;
// export function Subscribe(eventClassName: string) {
//
//     return function (target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
//
//         const handlerName: string = '__on' + eventClassName;
//         Object.defineProperty(target, handlerName, descriptor);
//
//     }
//
// }
function Subscribe(eventClassName) {
    return function (target, _propertyKey, descriptor) {
        if (typeof descriptor.value !== 'function') {
            return;
        }
        if (typeof target.__eventbus !== 'object') {
            target.__eventbus = {};
        }
        if (!target.__eventbus[eventClassName]) {
            target.__eventbus[eventClassName] = [];
        }
        target.__eventbus[eventClassName].push(descriptor.value);
    };
}
exports.Subscribe = Subscribe;
//# sourceMappingURL=index.js.map