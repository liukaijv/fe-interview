const STATUS_PENDING = 'pending';
const STATUS_FULFILLED = 'fulfilled';
const STATUS_REJECTED = 'rejected';

const resolvePromise = (promise, x, resolve, reject) => {
    // 自己等待自己
    if (promise === x) {
        return reject(new Error('chaining cycle'))
    }

    // 只能调用一次
    let called = false;

    if ((typeof x === 'object' && x != null) || typeof x === 'function') {
        try {

            let then = x.then;
            // 还是个promise
            if (typeof then === 'function') {
                then.call(x, y => {
                    if (called) {
                        return;
                    }
                    called = true;
                    resolvePromise(promise, y, resolve, reject);
                }, r => {
                    if (called) {
                        return;
                    }
                    called = true;
                    reject(r);
                });
            } else {
                resolve(x);
            }

        } catch (e) {
            if (called) {
                return;
            }
            called = true;
            reject(e);
        }
    } else {
        resolve(x);
    }

}

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

        // then返回一个promise
        let promise2 = new Promise((resolve, reject) => {

            if (this.status === STATUS_FULFILLED) {

                setTimeout(() => {

                    try {
                        let x = onFulfilled(this.value);
                        // resolve(x);
                        // 处理x可能为promise
                        resolvePromise(promise2, x, resolve, reject);

                    } catch (e) {
                        reject(e);
                    }

                }, 0);

            }

            if (this.status === STATUS_REJECTED) {

                setTimeout(() => {

                    try {
                        let x = onRejected(this.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }

                }, 0);

            }

            if (this.status === STATUS_PENDING) {

                this.onFulfilledCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.value);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }
                    }, 0);
                });


                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.value);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }
                    }, 0);
                });
            }

        });

        return promise2;
    }

    catch(errFunc) {
        return this.then(null, errFunc);
    }

    finally(func) {
        return this.then(value => {
            return Promise.resolve(func()).then(() => value);
        }, err => {
            return Promise.reject(func()).then(() => {
                throw err
            });
        });
    }

    static resolve(data) {
        return new Promise((resolve, reject) => {
            resolve(data);
        });
    }

    static reject(reason) {
        return new Promise((resolve, reject) => {
            reject(reason);
        });
    }

    static all(promises) {
        if (!Array.isArray(promises)) {
            const type = typeof promises;
            return new TypeError(`${type} ${promises} is not iterable`);
        }

        return new Promise((resolve, reject) => {
            let results = [];
            let index = 0;
            for (let i = 0; i < promises.length; i++) {
                let promise = promises[i];
                if (promise && typeof promise.then === 'function') {
                    promise.then(value => {
                        results[i] = value;
                        index++;
                        if (index === promises.length) {
                            resolve(results);
                        }
                    }, reject);
                } else {
                    results[i] = promise;
                    index++;
                    if (index === promises.length) {
                        resolve(results);
                    }
                }
            }
        });
    }

    static race(promises) {
        if (!Array.isArray(promises)) {
            const type = typeof promises;
            return new TypeError(`${type} ${promises} is not iterable`);
        }

        return new Promise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                let promise = promises[i];
                if (promise && typeof promise.then === 'function') {
                    promise.then(resolve, reject);
                } else {
                    resolve(promise);
                }
            }
        })

    }

}
