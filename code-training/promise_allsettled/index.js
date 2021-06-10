export function allSettled(promises) {

    const resolveHandler = value => {
        return {status: 'fulfilled', value}
    };
    const rejectHandler = reason => {
        return {status: 'rejected', reason}
    };

    return Promise.all(promises.map(promise => {
        return Promise.resolve(promise).then(resolveHandler, rejectHandler);
    }))

}

export function allSettled1(promises) {

    let results = [];

    return new Promise((resolve, reject) => {
        let index = 0;
        let len = promises.length;
        for (let i = 0; i < len; i++) {
            let promise = promises[i];

            Promise.resolve(promise).then(value => {
                results[i] = {status: 'fulfilled', value};
                index++;
                if (index == len) {
                    resolve(results);
                }
            }).catch(reason => {
                results[i] = {status: 'rejected', reason};
                index++;
                if (index == len) {
                    resolve(results);
                }
            })
        }
    })


}
