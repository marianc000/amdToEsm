import { strictEqual } from 'assert/strict';
import { loadFile } from '#utils/fileUtils.js';
import { toAst } from '#root/parser.js';

import { findOutermostRequirejs } from '../find.js';
import { convert } from './array.js';

export async function test(srcUrl, refUrl) {
    let js = await loadFile(srcUrl, import.meta.url);
    let ref = await loadFile(refUrl, import.meta.url);
    let ast = toAst(js);
    let exp = findOutermostRequirejs(ast);
    let js2 = convert(js, exp.node);
    //console.log(">" + js2 + "<");
    strictEqual(js2, ref);
}