/**
 * 借用构造函数
 */

// 优点:
//
//     可以向超类传递参数
// 解决了原型中包含引用类型值被所有实例共享的问题
// 缺点:
//
//     方法都在构造函数中定义，函数复用无从谈起，另外超类型原型中定义的方法对于子类型而言都是不可见的。
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

Child.prototype.getAge = function () {
    return this.age;
}

test('test', () => {
    let child = new Child('bobo', 22);
    // console.log(child.getName())
    console.log(child.name)
    console.log(child.getAge())
})
