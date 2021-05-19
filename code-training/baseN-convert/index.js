const CHARACTER_POOL = '0123456789abcdefghijklmnopqrstuvwxyz';

export function toBaseN(num, base = 16) {
    if (base < 2 || base > 36) {
        throw  new Error("2<base<37");
    }
    let arr = [];
    let n;
    while (num > 0) {
        n = num % base;
        arr.unshift(CHARACTER_POOL[n]);
        num = Math.floor(num / base);
    }
    return arr.join('');
}

export function toInt(num, base = 16) {
    let arr = num.split('');
    let poolArr = CHARACTER_POOL.split('');
    let res = 0;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let index = poolArr.indexOf(arr[i]);
        if (index === -1) {
            index = 0;
        }
        res += index * Math.pow(base, len - i - 1);
    }
    return res;
}
