/**
 * 寄生式继承
 * @param o
 * @returns {F}
 */
function createObj(o) {
    function F() {

    }

    F.prototype = o;

    let ins = new F();
    ins.sayHi = function () {
        console.log('hi')
    }
    return ins;
}

test('test', () => {
    let person = {
        name: 'bobo',
        age: 22,
    }

    let obj = createObj(person);
    console.log(obj.name)
    console.log(obj.sayHi())
    console.log(obj.age)
})
