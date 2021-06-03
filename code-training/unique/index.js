export function unique(arr) {
    let results = [];
    for (let item of arr) {
        if (results.indexOf(item) == -1) {
            results.push(item);
        }
    }
    return results;
}

export function unique1(arr) {
    let results = [];
    let hash = new Map();
    for (let item of arr) {
        if (!hash.get(item)) {
            results.push(item);
            hash.set(item, true);
        }
    }
    return results;
}
