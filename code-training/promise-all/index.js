export function all(promises) {

    return new Promise((resolve, reject) => {
        let results = [];
        let len = promises.length;
        let index = 0;
        for (let i = 0; i < len; i++) {
            let promise = promises[i];
            Promise.resolve(promise).then(value => {
                results[i] = value;
                index++;
                if (index === promises.length) {
                    resolve(results);
                }
            }, reject);
        }

    })

}

export async function queue(promises) {
    let sequence = Promise.resolve()
    promises.forEach(function (item) {
        sequence = sequence.then(item)
    })
    return sequence
}

export async function queue1(promises) {

    let result = []
    for (let i = 0; i < promises.length; i++) {
        result[i] = await promises[i];
    }
    return result;
}
