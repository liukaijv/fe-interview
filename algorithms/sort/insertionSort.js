export function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let temp = arr[i];
        for (j; j >= 0 && (arr[j] > temp); j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = temp;

    }
    return arr;
}
