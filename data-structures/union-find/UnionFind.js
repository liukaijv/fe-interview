export class UnionFind {
    constructor(count) {
        if (count <= 0) {
            throw new Error('count must gt 0')
        }
        // 有多少堆
        this.count = count;
        // 父节点
        this.parent = [];
        // 每堆大小
        this.sizes = [];
        for (let i = 0; i < count; i++) {
            this.parent[i] = i;
            this.sizes[i] = 1;
        }
    }

    // 有相同的root是连通的
    connected(el1, el2) {
        let root1 = this.find(el1);
        let root2 = this.find(el2);
        return root1 == root2;
    }

    find(el) {
        while (this.parent[el] != el) {
            this.parent[el] = this.parent(this.parent[el]);
            el = this.parent[el];
        }
        return el;
    }

    union(el1, el2) {
        if (this.connected(el1, el2)) {
            return;
        }
        let root1 = this.find(el1);
        let root2 = this.find(el2);
        if (this.sizes[root1] > this.sizes[root2]) {
            this.parent[root2] = root1;
            this.sizes[root1] += this.sizes[root2];
        } else {
            this.parent[root1] = root2;
            this.sizes[root2] += this.sizes[root1];
        }
        this.count--;
    }
}
