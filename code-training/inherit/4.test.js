/**
 * 原型式继承
 * @param o
 * @returns {F}
 */
function createObj(o) {
    function F() {

    }

    F.prototype = o;
    return new F();
}

test('test', () => {
    let person = {
        name: 'bobo',
        age: 22,
    }

    let obj = createObj(person);
    console.log(obj.name)
    console.log(obj.age)
})
