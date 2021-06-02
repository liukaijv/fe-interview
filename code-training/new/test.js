import {newFunc} from "./index";

test('newFunc', () => {

    function Foo(age) {
        this.name = 'haha';
        this.age = age;
    }

    let foo = newFunc(Foo, 5);
    console.log(foo.name);
    console.log(foo.age);

})
