import { strictEqual } from 'assert/strict';
import { loadFile } from '../fileUtils.js';
import { findOutermostDefine } from '../parser.js';
import { convert } from './arrayAndFunction.js';


let js = await loadFile('./amd/3.js');
let ref = await loadFile('./amd/3.out.js');
let exp = findOutermostDefine(js);
let js2 = convert(js, exp.node);
//console.log(`>${js2}<`);
strictEqual(ref, js2);

js = await loadFile('./amd/3.1.js');
ref = await loadFile('./amd/3.1.out.js');
exp = findOutermostDefine(js);
js2 = convert(js, exp.node);
// console.log(js2);
strictEqual(ref, js2);

js = await loadFile('./amd/3.text.js');
ref = await loadFile('./amd/3.text.out.js');
exp = findOutermostDefine(js);
js2 = convert(js, exp.node);
 //console.log(js2);
 strictEqual(ref, js2);
 