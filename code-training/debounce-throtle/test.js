import {debounce, throttle} from "./index";

async function wait(duration) {
    return new Promise((resolve => {
        setTimeout(function () {
            resolve();
        }, duration)
    }));
}

test('debounce', async () => {

    let foo = function (...args) {
        console.log(...args);
    }

    let d = debounce(foo, 200);

    for (let i = 0; i < 5; i++) {
        d(i);
    }

    // 200ms内连续调用4次，只打印最手一次4

    await wait(2000);

})

test('throttle', async () => {

    let foo = function (...args) {
        console.log(...args);
    }

    let t = throttle(foo, 200);

    for (let i = 0; i < 5; i++) {
        t(i);
    }

    // 后面几次并没有调用

    await wait(2000);
})
