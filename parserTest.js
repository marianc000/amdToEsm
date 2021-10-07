import { strictEqual } from 'assert/strict';
import { loadFile } from './convertor/utils/fileUtils.js';
import { convert, toAst } from './parser.js';

let js, js2, ref;

js = await loadFile('./convertor/define/arguments/cases/1.js', import.meta.url);
ref = await loadFile('./convertor/define/arguments/cases/1.out.js', import.meta.url);

js2 = convert(js);
strictEqual(ref, js2);

js = await loadFile('./convertor/define/arguments/cases/2.js', import.meta.url);
ref = await loadFile('./convertor/define/arguments/cases/2.out.js', import.meta.url);
js2 = convert(js);
strictEqual(ref, js2);

js = await loadFile('./convertor/define/arguments/cases/3.js', import.meta.url);
ref = await loadFile('./convertor/define/arguments/cases/3.out.js', import.meta.url);
js2 = convert(js);
strictEqual(ref, js2);



js = await loadFile('./convertor/define/arguments/cases/jquery.js', import.meta.url);
ref = await loadFile('./convertor/define/arguments/cases/jquery.out.js', import.meta.url);
js2 = convert(js);
strictEqual(js2, ref);

js = await loadFile('./convertor/requirejs/arguments/cases/requirejsNested.js', import.meta.url);
ref = await loadFile('./convertor/requirejs/arguments/cases/requirejsNested.out.js', import.meta.url);
js2 = convert(js);
strictEqual(js2, ref);

js = await loadFile('./convertor/requirejs/arguments/cases/noFunction.js', import.meta.url);
ref = await loadFile('./convertor/requirejs/arguments/cases/noFunction.out.js', import.meta.url);
js2 = convert(js );
strictEqual(ref, js2);

js = await loadFile('./convertor/requirejs/arguments/cases/arrayAndFunction.js', import.meta.url);
ref = await loadFile('./convertor/requirejs/arguments/cases/arrayAndFunction.out.js', import.meta.url);
js2 = convert(js);
strictEqual(ref, js2);
 //console.log(js2);
