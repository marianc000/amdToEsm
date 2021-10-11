import { strictEqual } from 'assert/strict';
import { loadFile } from 'utils/fileUtils.js';
import { convert, toAst } from './parser.js';

async function test(srcUrl, refUrl) {
    const js = await loadFile(srcUrl, import.meta.url);
    const ref = await loadFile(refUrl, import.meta.url);
    const js2 = convert(js);
    strictEqual(js2, ref);
}

await test('./define/arguments/cases/1.js', './define/arguments/cases/1.out.js');
await test('./define/arguments/cases/2.js', './define/arguments/cases/2.out.js');
await test('./define/arguments/cases/3.js', './define/arguments/cases/3.out.js');
await test('./define/arguments/cases/jquery.js', './define/arguments/cases/jquery.out.js');
await test('./requirejs/arguments/cases/requirejsNested.js', './requirejs/arguments/cases/requirejsNested.out.js');
await test('./requirejs/arguments/cases/noFunction.js', './requirejs/arguments/cases/noFunction.out.js');
await test('./requirejs/arguments/cases/arrayAndFunction.js', './requirejs/arguments/cases/arrayAndFunction.out.js');