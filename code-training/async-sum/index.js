function sumTwo(a, b, callback) {
    setTimeout(function () {
        callback(null, a + b);
    }, 100);
}

export async function asyncSumTwo(a, b) {
    return new Promise((resolve, reject) => {
        sumTwo(a, b, (reason, value) => {
            if (reason) {
                reject(reason);
            } else {
                resolve(value);
            }
        })
    })
}

export function asyncAddMulti(...args) {
    return new Promise(resolve => {
        args.reduce(async (acc, current) => {
            let total = await acc;
            return await asyncSumTwo(total, current);
        }, Promise.resolve(0)).then(resolve);
    })
}

export async function asyncAddMultiRecursive(...args) {
    let len = args.length;
    if (len === 1) {
        return args[0];
    }
    let results = [];
    for (let i = 0; i < len - 1; i = i + 2) {
        results.push(asyncSumTwo(args[i], args[i + 1]));
    }
    if (len % 2) {
        results.push(Promise.resolve(args[len - 1]));
    }

    return asyncAddMultiRecursive(...await Promise.all(results));
}

