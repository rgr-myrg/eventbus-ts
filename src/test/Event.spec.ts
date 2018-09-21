import {Event} from '../ts/Event';

describe('Event Tests', () => {
    class SyncEvent extends Event<number> {
        name: string = 'SyncEvent';
    }

    let event: SyncEvent;

    beforeAll(() => {
        event = new SyncEvent(5);
    });

    it('getName should return the event name', () => {
        expect(event.getName()).toEqual('SyncEvent');
    });

    it('getData should return the event data', () => {
        expect(event.getData()).toEqual(5);
    });

    it('typeof should return the data type', () => {
        expect(event.typeof()).toBe(typeof event.getData());
    });
});
