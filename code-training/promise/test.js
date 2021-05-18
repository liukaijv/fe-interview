import {PromiseSimple} from "./index";

async function wait(duration) {
    return new Promise((resolve => {
        setTimeout(resolve, duration)
    }));
}

test('PromiseSimple', async () => {

    let p = new PromiseSimple((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 200)
    });

    // 等待上面的延时执行
    await wait(500);

    p.then(function (value) {
        console.log(value);
    }, function () {

    })

    await wait(2000);

})

test('Promise', async () => {

});
