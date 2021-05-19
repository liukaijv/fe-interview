import {wait} from "./util";
import {Promise} from "./promise";

test('promise resolve', async () => {

    let promise = new Promise((resolve, reject) => {
        resolve('success');
    });

    promise.then(data => {
        console.log(data);
    }, err => {
        console.log(err);
    })

    await wait(500);

});

test('promise reject', async () => {

    let promise = new Promise((resolve, reject) => {
        reject('fail');
    });

    promise.then(data => {
        console.log(data);
    }, err => {
        console.log(err);
    })

    await wait(500);

});

test('promise then chain', async () => {

    let promise = new Promise((resolve, reject) => {
        resolve('success');
    });

    promise.then().then().then(data => {
        console.log(data);
    }, err => {
        console.log(err);
    })

    await wait(500);

});

test('promise catch', async () => {

    let promise = new Promise((resolve, reject) => {
        reject('fail');
    });

    promise.catch(err => {
        console.log(err);
    })

    await wait(500);

});

test('promise resolve', async () => {

    let promise = new Promise((resolve, reject) => {
        return Promise.resolve('success')
    });

    promise.then(data => {
        console.log(data);
    })

    await wait(500);

});

test('promise reject', async () => {

    let promise = new Promise((resolve, reject) => {
        return Promise.reject('fail')
    });

    promise.then(data => {
        console.log(data);
    }, err => {
        console.log(err);
    })

    await wait(500);

});


test('promise finally', async () => {

    let promise = new Promise((resolve, reject) => {
        resolve('success')
    });

    promise.finally(() => {
        console.log('success')
    })

    let promise1 = new Promise((resolve, reject) => {
        reject('fail')
    });

    promise1.finally(() => {
        console.log('fail')
    })
    await wait(500);

});

test('promise all', async () => {

    let promise1 = new Promise((resolve, reject) => {
        resolve('success1')
    });

    let promise2 = new Promise((resolve, reject) => {
        resolve('success2')
    });

    let promise3 = new Promise((resolve, reject) => {
        resolve('success3')
    });

    let promise4 = 'success4';

    Promise.all([promise1, promise2, promise3, promise4]).then(results => {
        console.log(results);
    }).catch(err => {
        console.log(err);
    })

    await wait(500);

});

test('promise race', async () => {

    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success1');
        }, 200);
    });

    let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success2');
        }, 100);
    });

    let promise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success3');
        }, 400);
    });

    Promise.race([promise1, promise2, promise3]).then(results => {
        console.log(results);
    }).catch(err => {
        console.log(err);
    })

    await wait(1000);

});
