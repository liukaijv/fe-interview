// 二分法查找

/**
 * 递归版
 * @param arr
 * @param x
 * @param low
 * @param high
 */
export function binarySearchRecursion(arr, x, low = 0, high = arr.length - 1) {
    let mid = Math.floor(low + (high - low) / 2);

    if (high >= low) {

        if (arr[mid] === x) {
            return mid;
        }

        if (arr[mid] > x) {
            return binarySearchRecursion(arr, x, low, mid - 1);
        } else {
            return binarySearchRecursion(arr, x, mid + 1, high);
        }

    } else {
        return -1;
    }

}

/**
 * 非递归
 * @param arr
 * @param x
 * @returns {number}
 */
export function binarySearch(arr, x) {
    let low = 0, high = arr.length - 1;

    while (high >= low) {
        let mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] === x) {
            return mid;
        }

        if (arr[mid] < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }

    }

}
