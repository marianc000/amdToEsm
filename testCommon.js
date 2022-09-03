import { strictEqual } from 'assert/strict';

import { loadFile } from '#utils/fileUtils.js';
import { toAst } from '#root/parser.js';

export function createTestParent(convert, find,parentUrl) {
    return async function test(srcUrl, refUrl) {
        let js = await loadFile(srcUrl, parentUrl);
        let ref = await loadFile(refUrl, parentUrl);
        let ast = toAst(js);
        let exp = find(ast);
        let js2 = convert(js, exp.node);
        strictEqual(js2, ref);
    };
}