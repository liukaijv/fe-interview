export function range(n, from = 0, step = 1) {
    return (new Array(n)).fill(0).map((i, index) => (typeof step == 'function' ? step() : step) * (index + from));
}

export function randomInt(n, from = 0) {
    return from + Math.floor(Math.random() * n);
}

export function shuffle(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        let index = randomInt(i);
        let temp = arr[index];
        arr[index] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
