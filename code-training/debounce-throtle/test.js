/**
 * 实现防抖和节流
 *
 */

async function wait(duration) {
    return new Promise((resolve => {
        setTimeout(function () {
            resolve();
        }, duration)
    }));
}

/**
 * 防抖
 * 时间周期内方法多次调用，只执行最后一次
 * @param func
 * @param wait
 */
function debounce(func, delay) {
    let timer;

    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    }

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

/**
 * 节流
 * 时间周期内多次调用，只执行一次
 * @param func
 * @param delay
 */
function throttle(func, delay) {
    let last = 0;
    return function (...args) {
        let now = Date.now();
        if (now - last > delay) {
            func.apply(this, args);
            last = now;
        }
    }
}

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
