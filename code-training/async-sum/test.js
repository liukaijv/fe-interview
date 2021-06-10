import {asyncAddMulti, asyncSumTwo, asyncAddMultiRecursive} from "./index";

test('asyncSumTwo', async () => {

    console.log(await asyncSumTwo(1, 2));

})

test('asyncAddMulti', async () => {

    let result = await asyncAddMulti(1, 2, 3, 4, 5);
    console.log(result);

    await new Promise(resolve => setTimeout(resolve, 1000));

})

test('asyncAddMultiRecursive', async () => {
    let result = await asyncAddMultiRecursive(1, 2, 3, 4, 5);
    console.log(result);

    await new Promise(resolve => setTimeout(resolve, 1000));
})
