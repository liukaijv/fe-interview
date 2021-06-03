/**
 * 函数组合
 * @param fns
 */
// function compose(f,g) {
//     return function (x) {
//         return f(g(x))
//     }
// }
export function compose(...fns) {
    if (fns.length === 0) {
        return (arg) => arg;
    }

    if (fns.length === 1) {
        return fns[0];
    }

    return fns.reduce((a, b) => {
        return (...args) => a(b(...args));
    });
}

export function compose1(...fns) {
    let len = length;
    if (len === 0) {
        return (arg) => arg;
    }

    if (len === 1) {
        return fns[0];
    }

    return function (...args) {
        let index = len - 1;
        let result = fns[index].apply(this, args);
        while (index--) {
            result = fns[index].call(this, result);
        }
        return result;
    }

}


