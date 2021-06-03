export function clone(obj) {
    let cloned = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = obj[key];
        }
    }
    return cloned;
}

export function deepClone(obj, hash = new WeakMap()) {
    if (obj instanceof Date) {
        return new Date(obj);
    }
    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (hash.has(obj)) {
        return hash.get(obj);
    }
    let cloned = new obj.constructor();
    hash.set(obj, cloned);
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key], hash);
        }
    }
    return cloned;
}
