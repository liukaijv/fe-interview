/**
 * 实现new
 *
 */

export function newFunc(constructor, ...args) {
    // 创建一个空对象
    let target = {};

    // 为空对象绑定原型
    target.__proto__ = constructor.prototype;

    // 执行构造函数
    let result = constructor.apply(target, args);
    // 结果是对象则返回对象
    if (result && (typeof result === 'object' || typeof result === 'function')) {
        return result;
    }

    return target;
}
