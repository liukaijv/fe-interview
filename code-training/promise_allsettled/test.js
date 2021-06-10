import {allSettled, allSettled1} from './index'

test('allSettled', async () => {


    let p1 = Promise.resolve(1);
    let p2 = Promise.resolve(2);
    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(3);
        }, 200)
    })

    await allSettled([p1, p2, p3]).then(value => console.log(value));

})

test('allSettled1', async () => {


    let p1 = Promise.resolve(1);
    let p2 = Promise.resolve(2);
    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(3);
        }, 200)
    })

    await allSettled1([p1, p2, p3]).then(value => console.log(value));

})
