const STATUS_PENDING = 'pending';
const STATUS_FULFILLED = 'fulfilled';
const STATUS_REJECTED = 'rejected';

/**
 * Promise A+
 */
export class Promise {
    constructor(executor) {
        this.status = STATUS_PENDING;
        this.value = undefined;
        this.reason = undefined;

        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        let resolve = value => {
            if (this.status === STATUS_PENDING) {
                this.status = STATUS_FULFILLED;
                this.value = value;
                this.onFulfilledCallbacks.forEach(func => func());
            }
        }

        let reject = reason => {
            if (this.status === STATUS_PENDING) {
                this.status = STATUS_REJECTED;
                this.reason = reason;
                this.onRejectedCallbacks.forEach(func => func());
            }
        }

        try {
            executor(resolve, reject);
        } catch (e) {
            reject(e)
        }

    }

    then(onFulfilled, onRejected) {

        // onFulfilled，onRejected不是function
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
        onRejected = typeof onRejected === 'function' ? onRejected : err => {
            throw  err
        };


        switch (this.status) {
            case STATUS_FULFILLED:
                onFulfilled(this.value);
                break;
            case STATUS_REJECTED:
                onRejected(this.reason);
                break;
            case STATUS_PENDING:
                this.onFulfilledCallbacks.push(() => {
                    onFulfilled(this.value);
                });
                this.onRejectedCallbacks.push(() => {
                    onRejected(this.reason);
                })
                break;

        }
    }

    catch() {

    }

    finally() {

    }

    static resolve() {

    }

    static reject() {

    }

    static all() {

    }

    static race() {

    }

}
