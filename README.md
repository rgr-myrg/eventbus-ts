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
import {EventBus, Subscribe} from "eventbus-ts";
```
### Creating Events

Create Event(s) with the specified type, i.e, _string_, _number_, etc.

```typescript
class DataEvent extends EventBus.Event<string> {}
class NumEvent extends EventBus.Event<number> {}
```
Overwrite **getData()** if you need to custom process your data. Ex:
```typescript
class DisconnectEvent extends EventBus.Event<string> {
    getData(): string {
        return 'Disconnecting... ' + this.data;
    }
}
```
### Register with EventBus

Register for Events with **EventBus.getDefault().register(this)**.

### Use Subscribe Decorator

Subscribe to events using **@Subscribe('EVENT_NAME')** for example:

```typescript
@Subscribe('DataEvent')
onDataEvent(data: string) : void {
    /* process data from DataEvent */
}
```

### Usage Sample

```typescript
class Activity {
    constructor() {
        EventBus.getDefault().register(this);
    }

    @Subscribe('DataEvent')
    onDataEvent(data: string) : void {
        /* process data from DataEvent */
    }

    @Subscribe('NumEvent')
    onNumEvent(data: number): void {
        /* process data from NumEvent */
    }
}
```

### Posting Events
To send events call the post() method for the Event:
```typescript
EventBus.getDefault().post(new DataEvent('sync up!'));
EventBus.getDefault().post(new NumEvent(299792458));
```

### Event Indexing and UglifyJs

Be sure to tell UglifyJs to exclude your Events from mangling. EventBus will index event handlers using the original unmangled classname. For example use 'reserved' and list your events: 

```typescript
uglifyjs source.js -c -m reserved=['TrackEvent'] -o source.min.js
```

# License

[MIT License](https://raw.githubusercontent.com/rgr-myrg/eventbus-ts/master/LICENSE)
