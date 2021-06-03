import {flatDeepRecursive, flatDeep} from "./index";

test('flatDeepRecursive', () => {
    let arr = [[1, 2], [3, 4], [5, 6, [7, 8, 9]]];
    console.log(flatDeepRecursive(arr));
})

test('flatDeep', () => {
    let arr = [[1, 2], [3, 4], [5, 6, [7, 8, 9]]];
    console.log(flatDeep(arr));
})
