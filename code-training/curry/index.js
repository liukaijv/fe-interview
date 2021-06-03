/**
 * 多参化国单参
 * @param args
 */
// function f(a,b) {
//
// }
//
// function curry(f) {
//     return function (a) {
//         return function (b) {
//             return f(a,b);
//         }
//     }
// }
export function curry(fn, ...args) {
    if (args.length < fn.length) {
        return (...args1) => curry(fn, ...args, ...args1);
    } else {
        return fn(...args);
    }
}


