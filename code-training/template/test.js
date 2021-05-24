import {simpleTpl} from "./index";

test('simpleTpl', () => {

    let tpl = '我是<%=foo%>,他是<%=bar%>.';
    let data = {
        foo: 'foo',
        bar: 'bar',
    }
    let template = simpleTpl(tpl, data);

    console.log(template);

})

test('test', () => {
    let data = {
        foo: 'foo',
        bar: 'bar',
    }
    new Function('data', "console.log(this.foo);").apply(data);
})
