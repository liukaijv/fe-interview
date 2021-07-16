export class ArrayQueue {
    constructor(capacity) {
        this.pool = capacity ? new Array(capacity) : [];
        this.count = 0;
    }

    offer(el) {
        if (this.isFull()) {
            throw new Error('queue is full')
        }
        this.pool[this.count] = el;
        this.count++;
    }

    peek() {
        return this.pool[this.count - 1];
    }

    poll() {
        let item = this.pool.pop();
        this.count--;
        return item;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count == 0;
    }

    isFull() {
        return this.count >= this.pool.length;
    }
}
