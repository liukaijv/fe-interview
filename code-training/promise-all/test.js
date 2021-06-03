import {all, queue} from './index'

async function wait(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    })
}

async function f() {
    console.log(1)
    return 1;
}

async function f1() {
    await wait(100)
    console.log(2)
    return 2;
}

async function f2() {
    await wait(10)
    console.log(3)
    return 3;
}

test('all', async () => {

    await Promise.all([f(), f1(), f2()]).then(value => {
        console.log(value);
    })

    await all([f(), f1(), f2()]).then(value => {
        console.log(value);
    })

    await wait(1000)

})

test('queue', async () => {

    queue([f(), f1(), f2()]).then(value => {
        console.log(value);
    }).catch(e => console.log(e))

    await wait(1000)

})
