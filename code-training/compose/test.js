import {compose, compose1} from "./index";

test('compose', () => {

    let add = function (x) {
        return x + 5;
    }
    let mul = function (x) {
        return x * 5;
    }
    let sub = function (x) {
        return x - 5;
    }
    let div = function (x) {
        return x / 5;
    }

    let calc = compose(add, mul, sub, div);

    console.log(calc(50));

})

test('compose1', () => {

    let add = function (x) {
        return x + 5;
    }
    let mul = function (x) {
        return x * 5;
    }
    let sub = function (x) {
        return x - 5;
    }
    let div = function (x) {
        return x / 5;
    }

    let calc = compose1(add, mul, sub, div);

    console.log(calc(50));

})
