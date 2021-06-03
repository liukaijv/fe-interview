import {unique, unique1} from "./index";

test('unique', () => {
    let arr = [1, 2, 2, 4, 5, 6, 8, 6, 10];
    console.log(unique(arr));
})

test('unique1', () => {
    let arr = [1, 2, 2, 4, 5, 6, 8, 6, 10];
    console.log(unique1(arr));
})
