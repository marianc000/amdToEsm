import { strictEqual } from 'assert/strict';
import { loadFile } from '#utils/fileUtils.js';
import { toAst } from '#root/parser.js';
import { convert } from './arrayAndFunction.js';
import { findOutermostDefine } from '../find.js';

async function test(srcUrl, refUrl) {
    let js = await loadFile(srcUrl, import.meta.url);
    let ref = await loadFile(refUrl, import.meta.url);
    let ast = toAst(js);
    let exp = findOutermostDefine(ast);
    let js2 = convert(js, exp.node);
    //  console.log(">" + js2 + "<");
    strictEqual(js2, ref);
}

await test('./arrayAndFunctionCases/3.js', './arrayAndFunctionCases/3.out.js');
await test('./arrayAndFunctionCases/3.1.js', './arrayAndFunctionCases/3.1.out.js');
await test('./arrayAndFunctionCases/3.text.js', './arrayAndFunctionCases/3.text.out.js');
await test('./arrayAndFunctionCases/demo.js', './arrayAndFunctionCases/demo.out.js');