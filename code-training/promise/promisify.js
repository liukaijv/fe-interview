import {Promise} from "./promise";

export function promisify(fn) {
    return (...args) => {
        return new Promise((resolve, reject) => {
            fn(...args, function (err, data) {
                if (err) {
                    return reject(err);
                }
                resolve(data);
            })
        });
    }
}
