import {bubbleSort} from "./bubbleSort";
import {randomInt, range, shuffle} from "../util";

test('bubbleSort', () => {

    let arr = range(20, 1, () => randomInt(10, 1));
    arr = shuffle(arr);
    console.log(arr)
    arr = bubbleSort(arr);
    console.log(arr);

})
