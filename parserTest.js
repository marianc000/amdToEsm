import { strictEqual } from 'assert/strict';
import { loadFile } from '#utils/fileUtils.js';
import { convert, toAst } from './parser.js';

async function test(srcUrl, refUrl) {
    const js = await loadFile(srcUrl, import.meta.url);
    const ref = await loadFile(refUrl, import.meta.url);
    const js2 = convert(js);
    //console.log(">"+js2+"<");
    strictEqual(js2, ref);
}

await test('./define/arguments/objectCases/1.js', './define/arguments/objectCases/1.out.js');
await test('./define/arguments/funcsionCases/2.js', './define/arguments/funcsionCases/2.out.js');
await test('./define/arguments/arrayAndFunctionCases/3.js', './define/arguments/arrayAndFunctionCases/3.out.js');
await test('./define/arguments/arrayAndFunctionNamedCases/jquery.js', './define/arguments/arrayAndFunctionNamedCases/jquery.out.js');
await test('./define/arguments/nestedCases/defineNested.js', './define/arguments/nestedCases/defineNested.out.js');
await test('./requirejs/arguments/nestedCases/requirejsNested.js', './requirejs/arguments/nestedCases/requirejsNested.out.js');
await test('./requirejs/arguments/arrayOnlyCases/noFunction.js', './requirejs/arguments/arrayOnlyCases/noFunction.out.js');
await test('./requirejs/arguments/arrayAndFunctionCases/arrayAndFunction.js', './requirejs/arguments/arrayAndFunctionCases/arrayAndFunction.out.js');