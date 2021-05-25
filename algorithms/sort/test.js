import {bubbleSort} from "./bubbleSort";
import {selectionSort} from './selectionSort'
import {insertionSort} from "./insertionSort";
import {randomInt, range, shuffle} from "../util";

test('bubbleSort', () => {

    let arr = range(20, 1, () => randomInt(10, 1));
    arr = shuffle(arr);
    console.log(arr)
    arr = bubbleSort(arr);
    console.log(arr);

})

test('selectionSort', () => {

    let arr = range(20, 1, () => randomInt(10, 1));
    arr = shuffle(arr);
    console.log(arr)
    arr = selectionSort(arr);
    console.log(arr);

})

test('insertionSort', () => {

    let arr = range(20, 1, () => randomInt(10, 1));
    arr = shuffle(arr);
    console.log(arr)
    arr = insertionSort(arr);
    console.log(arr);

})
