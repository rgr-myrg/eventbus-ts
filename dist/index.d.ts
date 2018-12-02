export { EventBus } from './EventBus';
export { Event } from './Event';
export declare function Subscribe(eventClassName: string): (target: any, _propertyKey: string, descriptor: PropertyDescriptor) => void;
