const STATUS_PENDING = 'pending';
const STATUS_FULFILLED = 'fulfilled';
const STATUS_REJECTED = 'rejected';

/**
 * 基本样子
 */
export class PromiseBasic {
    constructor(executor) {
        this.status = STATUS_PENDING;
        this.value = undefined;
        this.reason = undefined;

        let resolve = value => {
            if (this.status === STATUS_PENDING) {
                this.status = STATUS_FULFILLED;
                this.value = value;
            }
        }

        let reject = reason => {
            if (this.status === STATUS_PENDING) {
                this.status = STATUS_REJECTED;
                this.reason = reason;
            }
        }

        try {
            executor(resolve, reject);
        } catch (e) {
            reject(e)
        }

    }

    then(onFulfilled, onRejected) {
        switch (this.status) {
            case STATUS_FULFILLED:
                onFulfilled(this.value);
                break;
            case STATUS_REJECTED:
                onRejected(this.reason);
                break;

        }
    }
}

export class PromiseBasicAsync {
    constructor(executor) {
        this.status = STATUS_PENDING;
        this.value = undefined;
        this.reason = undefined;

        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];

        let resolve = value => {
            if (this.status === STATUS_PENDING) {
                this.status = STATUS_FULFILLED;
                this.value = value;
                this.onResolvedCallbacks.forEach(func => func());
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
        switch (this.status) {
            case STATUS_FULFILLED:
                onFulfilled(this.value);
                break;
            case STATUS_REJECTED:
                onRejected(this.reason);
                break;
            case STATUS_PENDING:
                this.onResolvedCallbacks.push(() => {
                    onFulfilled(this.value);
                });
                this.onRejectedCallbacks.push(() => {
                    onRejected(this.reason);
                })
                break;
        }
    }
}
