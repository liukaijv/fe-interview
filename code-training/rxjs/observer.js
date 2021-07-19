const noop = () => {
}

export class Observer {

    constructor(next, error, complete) {
        this.stoped = false;
        this.unSubscribeFn = null;
        this._next = next || noop;
        this._error = error || noop;
        this._complete = complete || noop;
    }

    next(value) {
        if (!this.stoped) {
            this._next(value);
        }
    }

    error(err) {
        if (!this.stoped) {
            this._error(err);
            this.unSubscribe();
        }
    }

    complete() {
        if (!this.stoped) {
            this._complete();
            this.unSubscribe();
        }
    }

    onUnSubscribe(unSubscribeFn) {
        this.unSubscribeFn = unSubscribeFn;
    }

    unSubscribe() {
        this.stoped = true;
        this.unSubscribeFn && this.unSubscribeFn();
    }
}
