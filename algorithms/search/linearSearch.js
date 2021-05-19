/**
 * 线性查找
 * @param arr
 * @param x
 * @returns {number}
 */
export function linearSearch(arr, x) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
    }

    return -1;
}
