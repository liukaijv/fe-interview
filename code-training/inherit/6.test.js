/**
 * 寄生组合式继承
 */

function inheritPrototype(Child, Father) {
    Child.prototype = Object.create(Father.prototype);
    Child.prototype.constructor = Child;
}


function Father() {
    this.name = 'bobo';
}

Father.prototype.getName = function () {
    return this.name;
}

function Child() {
    Father.call(this, name);
    this.age = 22;
}

inheritPrototype(Child, Father)

Child.prototype.getAge = function () {
    return this.age;
}

test('test', () => {
    let child = new Child();
    console.log(child.getName())
    // console.log(child.getAge())
})
