import './index'

test('apply', () => {
    function foo(a, b) {
        console.log(this, a, b)
    }

    let obj = {
        name: 'xixi',
    }
    foo._apply(obj, [1, 2]);
    foo._apply(null, [1, 2]);
})


test('call', () => {
    function foo(a, b) {
        console.log(this, a, b)
    }

    let obj = {
        name: 'xixi',
    }
    foo._call(obj, 1, 2);
})

test('bind', () => {
    function foo(...args) {
        console.log(this, args)
    }

    let obj = {
        name: 'xixi',
    }
    let f = foo._bind(obj, 1, 2);
    f(3, 4);
})

