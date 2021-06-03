export function flatDeepRecursive(arr, temp = []) {

    arr.forEach(item => {
        if (Array.isArray(item)) {
            temp = flatDeep(item, temp);
        } else {
            temp = [...temp, item];
        }
    })

    return temp;
}

export function flatDeep(arr) {
    let stack = [...arr];
    let results = [];
    while (stack.length) {
        let item = stack.shift();
        if (Array.isArray(item)) {
            stack.unshift(...item);
        } else {
            results.push(item);
        }
    }

    return results;
}

