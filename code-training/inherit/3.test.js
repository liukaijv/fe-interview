/**
 * 原型链+借用构造函数
 */

// 缺点:
//
//     无论什么情况下，都会调用两次超类型构造函数：一次是在创建子类型原型的时候，另一次是在子类型构造函数内部。
// 优点:
//
//     可以向超类传递参数
// 每个实例都有自己的属性
// 实现了函数复用
function Father(name) {
    this.name = name;
}

Father.prototype.getName = function () {
    return this.name;
}

function Child(name, age) {
    this.age = age;
    Father.call(this, name)
}

Child.prototype = new Father();
Child.prototype.constructor = Child;

Child.prototype.getAge = function () {
    return this.age;
}

test('test', () => {
    let child = new Child('bobo', 22);
    console.log(child.getName())
    console.log(child.name)
    console.log(child.getAge())
})
