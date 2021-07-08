import {asyncPool} from "./index";

test('asyncPool', async () => {

    const timeout = i => new Promise(resolve => setTimeout(() => resolve(i), i));


    let ret = await asyncPool(2, [100, 200, 400, 500], timeout)


    console.log(ret);

})
