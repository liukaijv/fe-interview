export function mergeSortRecursive(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let arr1 = arr.slice(0, mid);
    let arr2 = arr.slice(mid, arr.length);

    return merge(mergeSortRecursive(arr1), mergeSortRecursive(arr2));
}

function merge(arr1, arr2) {
    let result = [];
    while (arr1.length && arr2.length) {
        while (arr1.length && arr2.length) {
            if (arr1[0] <= arr2[0]) {
                result.push(arr1.shift())
            } else {
                result.push(arr2.shift())
            }
        }
        return result.concat(arr1, arr2)
    }
    return result.concat(arr1, arr2);
}

/**
 * 非递归版
 * 每次2*k个进行合并
 */
export function mergeSort(arr) {
    let len = arr.length;
    let k = 1;
    while (k < len) {
        k *= 2;

    }

    return arr;
}

export function mergeSortedArr(arr1, arr2) {
    let i = arr1.length - 1;
    let j = arr2.length - 1;
    let end = arr1.length + arr2.length;
    let result = [].concat(arr1, new Array(j + 1).fill(0));
    while (j >= 0) {
        if (i >= 0 && arr1[i] > arr2[j]) {
            result[end] = arr1[i];
            i--;
        } else {
            result[end] = arr2[j];
            j--;
        }
        end--;
    }
    return result;
}

export function mergeSortedArr2(arr1, arr2) {
    let m = arr1.length;
    let result = [].concat(arr1, new Array(arr2.length).fill(0));
    for (let j = 0; j < arr2.length; j++) {
        let i = m - 1;
        let flag = true;
        while (i >= 0 && arr2[j] < arr1[i]) {
            result[i + 1] = arr1[i];
            result[i] = arr2[j];
            i--;
            flag = false;
        }
        if (flag) {
            result[i + 1] = arr2[j];
        }
        m++;
    }
    return result;
}


