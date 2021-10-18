import { strictEqual } from 'assert/strict';
import { loadFile } from '#utils/fileUtils.js';
import { findOutermostDefine } from '../find.js';
import { convert } from './object.js';
import { toAst } from '#root/parser.js';

async function test(srcUrl, refUrl){
    let js = await loadFile(srcUrl, import.meta.url);
    let ref = await loadFile(refUrl, import.meta.url);
    let ast = toAst(js);
    let exp = findOutermostDefine(ast);
    let js2 = convert(js, exp.node);
    strictEqual(ref, js2);
}

await test('./objectCases/1.js','./objectCases/1.out.js' );
await test('./objectCases/demo.js','./objectCases/demo.out.js' );
 