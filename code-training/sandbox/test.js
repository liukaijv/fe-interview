import {compileCode} from "./index";

test('compileCode', ()=>{

    let code = 'console.log(1)';

    let run = compileCode(code);

    run(window);

})
