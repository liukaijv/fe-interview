const STATE_PENDING = 'pending';
const STATE_FULFILLED = 'fulfilled';
const STATE_REJECTED = 'rejected';

export class PromiseSimple {
    constructor(executor) {
        this.state = STATE_PENDING;
        this.value = undefined;
        this.reason = undefined;

        let resolve = value => {
            if (this.state === STATE_PENDING) {
                this.state = STATE_FULFILLED;
                this.value = value;
            }
        }

        let reject = reason => {
            if (this.state === STATE_PENDING) {
                this.state = STATE_REJECTED;
                this.reason = reason;
            }
        }

        try {
            executor(resolve, reject);
        } catch (e) {
            reject(e)
        }

    }

    then(resolve, reject) {
        switch (this.state) {
            case STATE_FULFILLED:
                resolve(this.value);
                break;
            case STATE_REJECTED:
                reject(this.reason);
                break;

        }
    }
}

/**
 * 完整版
 */
export class Promise {

    constructor(executor) {
    }


    then() {

    }
}
