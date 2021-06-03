import {clone, deepClone} from "./index";

test('clone', () => {
    let obj = {
        name: 'foo',
        age: 22,
        birth: new Date(2000, 2, 10),
        friends: [
            {
                name: 'xixi',
                age: 28,
            },
            {
                name: 'haha',
                age: 22,
            },
        ],
    }
    console.log(obj);
    let obj2 = clone(obj);
    console.log(obj2);
    let obj3 = Object.assign({}, obj);
    console.log(obj3);
})


test('deepClone', () => {
    let obj = {
        name: 'foo',
        age: 22,
        birth: new Date(2000, 2, 10),
        friends: [
            {
                name: 'xixi',
                age: 28,
            },
            {
                name: 'haha',
                age: 22,
            },
        ],
    }
    console.log(obj);
    let obj2 = deepClone(obj);
    console.log(obj2);
    let obj3 = JSON.parse(JSON.stringify(obj));
    console.log(obj3);
})
