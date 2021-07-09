// via https://blog.csdn.net/qq_36571602/article/details/115079346

const sandboxProxies = new WeakMap()

export function compileCode(src) {
    src = `with (sandbox) { ${src} }`;

    const code = new Function('sandbox', src);

    function get(target, key) {
        return target[key];
    }

    function has(target, key) {
        return true;
    }

    return function (sandbox) {

        if (!sandboxProxies.has(sandbox)) {
            const proxy = new Proxy(sandbox, {has, get})
            sandboxProxies.set(sandbox, proxy);
        }

        return code(sandboxProxies.get(sandbox));
    }

}
