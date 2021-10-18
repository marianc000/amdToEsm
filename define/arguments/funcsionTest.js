import { strictEqual } from 'assert/strict';
import { loadFile } from '#utils/fileUtils.js';
import { findOutermostDefine } from '../find.js';
import { convert } from './funcsion.js';
import { toAst } from '#root/parser.js';

async function test(srcUrl, refUrl) {
    let js = await loadFile(srcUrl, import.meta.url);
    let ref = await loadFile(refUrl, import.meta.url);
    let ast = toAst(js);
    let exp = findOutermostDefine(ast);
    let js2 = convert(js, exp.node);
  //  console.log(">" + js2 + "<");
    strictEqual(ref, js2);
}

await test('./funcsionCases/2.js', './funcsionCases/2.out.js');
await test('./funcsionCases/2.1.js', './funcsionCases/2.1.out.js');
await test('./funcsionCases/demo.js', './funcsionCases/demo.out.js');