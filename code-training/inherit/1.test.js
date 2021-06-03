/**
 * 原型链继承
 * @constructor
 */

// 缺点
// 通过原型来实现继承时，原型会变成另一个类型的实例，原先的实例属性变成了现在的原型属性，该原型的引用类型属性会被所有的实例共享。
// 在创建子类型的实例时，没有办法在不影响所有对象实例的情况下给超类型的构造函数中传递参数。

function Father() {
    this.name = 'bobo';
}

Father.prototype.getName = function () {
    return this.name;
}

function Child() {
    this.age = 22;
}

Child.prototype = new Father();
Child.prototype.getAge = function () {
    return this.age;
}

test('test', () => {
    let child = new Child();
    console.log(child.getName())
    console.log(child.getAge())
})
