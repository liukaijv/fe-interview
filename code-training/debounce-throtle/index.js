// 实现防抖和节流

/**
 * 防抖
 * 时间周期内方法多次调用，只执行最后一次
 * @param func
 * @param wait
 */
export function debounce(func, delay) {
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

/**
 * 节流
 * 时间周期内多次调用，只执行一次
 * @param func
 * @param delay
 */
export function throttle(func, delay) {
    let last = 0;
    return function (...args) {
        let now = Date.now();
        if (now - last > delay) {
            func.apply(this, args);
            last = now;
        }
    }
}
