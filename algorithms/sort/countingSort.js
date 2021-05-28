/**
 * O(n+k) k为最大值一最小值
 * @param arr
 * @param min
 * @param max
 * @returns {*}
 */
export function countingSort(arr, min, max) {
    let bucket = (new Array(max + 1)).fill(0);
    let k = 0;

    for (let i = 0; i < arr.length; i++) {
        bucket[arr[i]]++;
    }

    for (let j = min; j <= max; j++) {
        while (bucket[j] > 0) {
            arr[k] = j;
            k++;
            bucket[j]--;
        }
    }

    return arr;
}
