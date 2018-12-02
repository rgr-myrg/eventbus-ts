export {EventBus} from './EventBus';

export function Subscribe(eventClassName: string) {

    return function (target: any, _propertyKey: string, descriptor: PropertyDescriptor) {

        const handlerName: string = '__on' + eventClassName;
        Object.defineProperty(target, handlerName, descriptor);

    }

}
