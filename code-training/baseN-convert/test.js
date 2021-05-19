import {toBaseN, toInt} from "./index";

test('toBaseN', () => {

    expect(toBaseN(40, 16)).toEqual('28');
    expect(toBaseN(8, 2)).toEqual('1000');

})

test('toInt', () => {

    expect(toInt('28', 16)).toEqual(40);
    expect(toInt('1000', 2)).toEqual(8);

})
