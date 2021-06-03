import {curry} from "./index";

test('curry', () => {
    function sum(a, b, c) {
        return a + b + c;
    }

    let s = curry(sum);

    console.log(s(1)(2)(3));
    console.log(s(1, 2)(3));

})
