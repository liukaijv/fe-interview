class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkList {
    constructor() {
        this.head = new Node(null, null);
        this.tail = new Node(null, null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    add(node) {
        const temp = this.tail.prev;
        temp.next = node;
        node.prev = temp;
        this.tail.prev = node;
        node.next = this.tail;
    }

    remove(node) {
        const tempPrev = node.prev;
        const tempNext = node.next;
        node.next = null;
        node.prev = null;
        tempPrev.next = tempNext;
        tempNext.prev = tempPrev;
        return node;
    }
}

/**
 * 时间复杂度: o(1)
 * 空间复杂度：o(n)
 * 又双端链表记录顺序，map放数据
 */
export class LRUCache {

    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.cache = new Map();
        this.list = new DoubleLinkList();
    }

    set(key, value) {
        if (this.cache.has(key)) {
            // 存在，更新数据并移动到最后面
            let node = this.list.remove(this.cache[key]);
            node.value = value;
            this.list.add(node);
        } else {
            // 大于最大容量，缩容
            if (this.size >= this.capacity) {
                const deleteKey = this.list.prev.next.key;
                this.list.remove(this.cache.get(deleteKey));
                this.cache.remove(deleteKey);
                this.size--;
            }
            let node = new Node(key, value);
            this.cache.set(key, node);
            this.list.add(node);
            this.size++;
        }
    }

    get(key) {
        if (this.cache.has(key)) {
            // 移动到最后面
            let node = this.list.remove(this.cache.get(key));
            this.list.add(node);
            return node;
        } else {
            return null;
        }
    }
}


