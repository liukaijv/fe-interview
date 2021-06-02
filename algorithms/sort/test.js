import {bubbleSort} from "./bubbleSort";
import {selectionSort} from './selectionSort'
import {insertionSort} from "./insertionSort";
import {mergeSortRecursive, mergeSort, mergeSortedArr, mergeSortedArr2} from "./mergeSort";
import {countingSort} from "./countingSort";
import {shellSort} from "./shellSort";
import {quickSort, quickSortRecursive} from "./quickSort";
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

test('mergeSortRecursive', () => {
    let arr = range(10, 1, () => randomInt(10, 1));
    arr = shuffle(arr);
    console.log(arr)
    arr = mergeSortRecursive(arr);
    console.log(arr);
})

test('mergeSort', () => {
    let arr = range(6, 1, () => randomInt(10, 1));
    arr = shuffle(arr);
    console.log(arr)
    arr = mergeSort(arr);
    console.log(arr);
})

test('mergeSortedArr', () => {
    let arr1 = range(2, 1, () => randomInt(10, 1));
    let arr2 = range(2, 1, () => randomInt(10, 1));
    arr1 = insertionSort(arr1);
    arr2 = insertionSort(arr2);
    console.log(arr1);
    console.log(arr2);
    let arr = mergeSortedArr(arr1, arr2);
    console.log(arr);
})

test('mergeSortedArr2', () => {
    let arr1 = range(6, 1, () => randomInt(10, 1));
    let arr2 = range(5, 1, () => randomInt(10, 1));
    arr1 = insertionSort(arr1);
    arr2 = insertionSort(arr2);
    console.log(arr1);
    console.log(arr2);
    let arr = mergeSortedArr2(arr1, arr2);
    console.log(arr);
})

test('countingSort', () => {
    let arr = range(10, 1, () => randomInt(2, 1));
    arr = shuffle(arr);
    console.log(arr)
    arr = countingSort(arr, 1, 20);
    console.log(arr);
})

test('shellSort', () => {
    let arr = range(20, 1, () => randomInt(2, 1));
    arr = shuffle(arr);
    console.log(arr)
    arr = shellSort(arr, 1, 20);
    console.log(arr);
})

test('quickSort', () => {
    let arr = range(20, 1, () => randomInt(2, 1));
    arr = shuffle(arr);
    console.log(arr)
    arr = quickSort(arr, 1, 20);
    console.log(arr);
})

test('quickSortRecursive', () => {
    let arr = range(10, 1, () => randomInt(2, 1));
    arr = shuffle(arr);
    console.log(arr)
    arr = quickSortRecursive(arr);
    console.log(arr);
})
