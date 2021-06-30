import {useState} from "./index";
import {useState1} from "./index1";

test('useState', () => {

    let [num, setNum] = useState(0);

    console.log('num: ' + num);

    setNum(2);

    console.log('num: ' + num);

})


test('useState1', () => {

    let [num, setNum] = useState1(0);
    let [num1, setNum1] = useState1(1);

    console.log('num: ' + num);
    console.log('num1: ' + num1);

    setNum(2);
    setNum1(3);

    console.log('num: ' + num);
    console.log('num1: ' + num1);

})

