export {EventBus} from './EventBus';

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

export function Subscribe(eventClassName: string) {

    return function (target: any, _propertyKey: string, descriptor: PropertyDescriptor) {

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

    }

}
