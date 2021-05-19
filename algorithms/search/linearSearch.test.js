import {linearSearch} from './linearSearch'
import {range} from "../util";

test('linearSearch', () => {
    let arr = range(20);
    let index = linearSearch(arr, 5);
    expect(index).toEqual(5);
});
