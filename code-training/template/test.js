import {simpleTpl} from "./index";

test('simpleTpl', () => {

    let tpl = '我是<%=this.foo%>,他是<%=this.bar%>.' +
        '<%if(this.arr){%>' +
        '<% for(var i=0;i<this.arr.length;i++){%>' +
        '<a href="#"><%=this.arr[i]%></a>' +
        '<%}%>' +
        '<%} else {%>' +
        '<p>aa</p>' +
        '<%}%>';
    let data = {
        foo: 'foo',
        bar: 'bar',
        arr: ['haha', 'xixi'],
    }
    let template = simpleTpl(tpl, data);

    console.log(template);

})


test('tpl', () => {
    function foo() {
        var r = [];
        r.push("我是");
        r.push(this.foo);
        r.push(",他是");
        r.push(this.bar);
        r.push(".");
        if (this.arr) {
            for (var i = 0; i < this.arr.length; i++) {
                r.push("<a href=\"#\">");
                r.push(this.arr[i]);
                r.push("</a>");
            }
        } else {
            r.push("<p>aa</p>");
        }
        return r.join("");
    }

    let data = {
        foo: 'foo',
        bar: 'bar',
        arr: ['haha', 'xixi'],
    }
    console.log(foo.call(data));
});

test('test', () => {
    let data = {
        foo: 'foo',
        bar: 'bar',
    }
    new Function('data', "console.log(this.foo);").apply(data);
})
