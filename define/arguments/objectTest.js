import { strictEqual } from 'assert/strict';
import { loadFile } from 'utils/fileUtils.js';
import { findOutermostDefine } from '../find.js';
import { convert } from './object.js';
import { toAst } from '../../parser.js';

async function test(srcUrl, refUrl){
    let js = await loadFile(srcUrl, import.meta.url);
    let ref = await loadFile(refUrl, import.meta.url);
    let ast = toAst(js);
    let exp = findOutermostDefine(ast);
    let js2 = convert(js, exp.node);
    strictEqual(ref, js2);
}

await test('./cases/1.js','./cases/1.out.js' );
await test('./cases/1.1.js','./cases/1.1.out.js' );
 