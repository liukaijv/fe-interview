// 实现Object.create
//
// Object.prototype.create = function (proto) {
//     function F() {
//
//     }
//
//     F.prototype = proto;
//     return new F();
// }

Object.prototype.create = function (prototype, properties) {
    if (typeof prototype != 'object') {
        throw  TypeError();
    }

    function F() {

    }

    F.prototype = prototype;
    let o = new F();
    if (prototype) {
        o.constructor = F;
    }
    if (properties) {
        if (properties !== Object(properties)) {
            throw TypeError();
        }
        Object.defineProperties(o, properties);
    }
    return o;
}
