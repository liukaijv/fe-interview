export function fibRecursion(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1 || n == 2) {
        return 1;
    }
    return fibRecursion(n - 1) + fibRecursion(n - 2);
}

export function fib(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1 || n == 2) {
        return 1;
    }
    let result = 1;
    let f1 = 1;
    let f2 = 1;
    for (let i = 2; i < n; i++) {
        result = f1 + f2;
        f1 = f2;
        f2 = result;
    }
    return result;
}
