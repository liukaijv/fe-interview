export function quickSort(arr) {


    return arr;
}

export function quickSortRecursive(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        let pivot = partition(arr, low, high);
        quickSortRecursive(arr, low, pivot - 1);
        quickSortRecursive(arr, pivot + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    let pivot = arr[low];
    while (low < high) {
        while (low < high && arr[high] > pivot) {
            high--;
        }
        arr[low] = arr[high];
        while (low < high && arr[low] <= pivot) {
            low++;
        }
        arr[high] = arr[low];
    }
    arr[low] = pivot;
    return low;
}
