import {fib, fibRecursion} from "./index";

test('fibRecursion', () => {
    let n = 8;
    let sum = fibRecursion(n);
    expect(sum).toEqual(21)
})

test('fib', () => {
    let n = 8;
    let sum = fib(n);
    expect(sum).toEqual(21)
})
