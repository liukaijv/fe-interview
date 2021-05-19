import {PromiseBasic, PromiseBasicAsync} from "./basic";
import {wait} from "./util";

test('PromiseBasic', async () => {

    let p = new PromiseBasic((resolve, reject) => {
        resolve('success');
    });

    p.then(function (value) {
        console.log(value);
    }, function () {

    })

})

test('PromiseBasicAsync', async () => {

    let p = new PromiseBasicAsync((resolve, reject) => {
        setTimeout(() => {
            resolve('success');
        }, 200);
    });

    p.then(function (value) {
        console.log(value);
    }, function (e) {
        console.log(e)
    })

    await wait(1000)

});
