// via https://github.com/rxaviers/async-pool

export function asyncPool(limit, arr, fn) {
    let i = 0;
    const ret = [];
    const executing = [];
    const enqueue = function () {

        if (i == arr.length) {
            return Promise.resolve();
        }

        const item = arr[i++];

        const p = Promise.resolve().then(() => fn(item, arr));

        ret.push(p);

        const e = p.then(() => executing.splice(executing.indexOf(e), 1));

        executing.push(e);

        let r = Promise.resolve();

        if (executing.length >= limit) {
            r = Promise.race(executing);
        }

        return r.then(() => enqueue());

    }

    return enqueue().then(() => Promise.all(ret));

}
