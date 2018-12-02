import {EventBus} from '../ts/EventBus';

describe('Event Tests', () => {
    class SyncEvent extends EventBus.Event<number> {}

    let event: SyncEvent;

    beforeAll(() => {
        event = new SyncEvent(5);
    });

    it('getName should return the event name', () => {
        //expect(event.getName()).toEqual('SyncEvent');
        expect(event.constructor.name).toEqual('SyncEvent');
    });

    it('getData should return the event data', () => {
        expect(event.getData()).toEqual(5);
    });

    it('typeof should return the data type', () => {
        expect(event.typeof()).toBe(typeof event.getData());
    });
});
