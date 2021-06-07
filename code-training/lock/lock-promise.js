export class LockPromise {
    constructor() {
        this.status = false;
        this.data = null;
        this.resolve = null;
    }

    wait() {
        return new Promise((resolve, reject) => {
            if (this.status) {
                resolve(this.data);
            } else {
                this.resolve = resolve;
            }
        })
    }

    notify(data) {
        this.data = data;
        this.status = true;
        this.resolve && this.resolve(this.data);
    }

}
