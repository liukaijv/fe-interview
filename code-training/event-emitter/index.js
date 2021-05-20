export class EventEmitter {

    constructor() {
        this.events = new Map();
    }

    on(event, handler) {
        if (typeof handler === 'function') {
            if (this.events.has(event) && Array.isArray(this.events.get(event))) {
                this.events.get(event).push(handler);
            } else {
                this.events.set(event, [handler]);
            }
        }
    }

    once(event, handler) {
        let that = this;
        this.on(event, function wrapper(...args) {
            this.off(event, wrapper);
            handler.apply(that, args);
        })
    }

    emit(event, ...data) {
        if (this.events.has(event) && Array.isArray(this.events.get(event))) {
            this.events.get(event).forEach(handler => {
                typeof handler === 'function' && handler.apply(this, data);
            })
        }
    }

    off(event, handler) {
        if (this.events.has(event) && Array.isArray(this.events.get(event))) {
            let index = this.events.get(event).indexOf(handler);
            if (index > -1) {
                this.events.get(event).splice(index, 1);
            }
        }
    }

    offAll(event) {
        if (this.events.has(event)) {
            this.events.set(event, []);
        }
    }

    eventSize(event) {
        return this.events.get(event).length;
    }

}
