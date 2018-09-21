[![Build Status](https://travis-ci.org/rgr-myrg/eventbus-ts.svg?branch=master)](https://travis-ci.org/rgr-myrg/eventbus-ts) [![npm version](https://badge.fury.io/js/eventbus-ts.svg)](https://badge.fury.io/js/eventbus-ts)

# TypeScript Event Bus

EventBus written in Typescript. Events are typed!

# Installation

```
npm install eventbus-ts
```

# Usage
### Importing EventBus and Event
```typescript
import {EventBus, Event} from "eventbus-ts";
```
### Creating Events

Create Event(s) with the specified type, i.e, _string_, _number_, etc.

```typescript
class DataEvent extends Event<string> {}
class NumEvent extends Event<number> {}
```
Overwrite **getData()** if you need to custom process your data. Ex:
```typescript
class DisconnectEvent extends Event<string> {
    getData(): string {
        return 'Disconnecting... ' + this.data;
    }
}
```
### Register with EventBus

Register for Events with **EventBus.getDefault().register(this)**.

```typescript
class Activity {
    constructor() {
        EventBus.getDefault().register(this);
    }
    onDataEvent(data: string) : void {
        /* process data from DataEvent */
    }
    onNumEvent(data: number): void {
        /* process data from NumEvent */
    }
}
```

### Posting Events

The **post()** method performs reflection on the objects that registered with the EventBus. By default it will search for the handler name that corresponds to the '**on**' Event interest. For example _onDataEvent_ corresponds to the _DataEvent_. All you have to do is name your handlers appropriately to match the Event interests.

To send events call the post() method for the Event:
```typescript
EventBus.getDefault().post(new DataEvent('sync up!'));
EventBus.getDefault().post(new NumEvent(299792458));
```

# Usage Sample
### Automated Teller Machine
```typescript
class ATMProcessor {
	constructor() {
        EventBus.getDefault().register(this);
    }
	// Event handlers
    onPinEntered(pin: number): void {
        console.log('pin entered:', pin);
    }
    onWithdrawAmount(amount: number): void {
        console.log('withdraw amount:', amount);
    }
    onBalanceRequested(pin: number): void {
        console.log('balance requested w/pin:', pin);
    }
    onDisconnectMsg(msg: string): void {
        console.log(msg);
    }
}
// Extend the Event class for each event
class PinEntered extends Event<number> {}
class WithdrawAmount extends Event<number> {}
class BalanceRequested extends Event<number> {}
// Overwrite getData() for processing the data
class DisconnectMsg extends Event<string> {
    getData(): string {
        return 'Disconnecting... ' + this.data;
    }
}
// Main class
class ATM {
	constructor() {
		new ATMProcessor();
	}
	// Post events
	enterPin(pin: number): void {
		EventBus.getDefault().post(new PinEntered(pin));
	}
	withdrawFunds(amount: number): void {
	    EventBus.getDefault().post(new WithdrawAmount(amount));
	}
	balanceRequest(pin: number): void {
	    EventBus.getDefault().post(new BalanceRequested(pin));
	}
    disconnect(): void {
        EventBus.getDefault().post(new DisconnectMsg('Thank you'));
    }
}
```
### Use Case
```typescript
let atm = new ATM();
// User authorized by entering pin
atm.enterPin(555);

// User requests withdrawal
atm.withdrawFunds(100);

// User requests balance
atm.balanceRequest(555);

// Disconnect
atm.disconnect();
```

### Expected Output

```typescript
pin entered: 555
withdraw amount: 100
balance requested w/pin: 555
Disconnecting... Thank you
```
# License

[MIT License](https://raw.githubusercontent.com/rgr-myrg/eventbus-ts/master/LICENSE)
