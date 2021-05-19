import {binarySearchRecursion, binarySearch} from "./binarySearch";
import {range} from "../util";

test('binarySearchRecursion', () => {

    let arr = range(20);

    console.log(arr);

    let index = binarySearchRecursion(arr, 5);

    expect(index).toEqual(5)

});

test('binarySearch', () => {

    let arr = range(20);

    console.log(arr);

    let index = binarySearch(arr, 5);

    expect(index).toEqual(5)

});
