import { loadFile } from '../fileUtils.js';
import { findDefine } from '../parser.js';
import { convert } from './arrayAndFunction.js';


let js = await loadFile('./amd/3.js');
let ref = await loadFile('./amd/3.out.js');
let exp = findDefine(js);
let js2 = convert(js, exp.node);
//console.log(`>${js2}<`);
 console.assert(ref === js2);
 
js = await loadFile('./amd/3.1.js');
ref = await loadFile('./amd/3.1.out.js');
exp = findDefine(js);
js2 = convert(js, exp.node);
// console.log(js2);
console.assert(ref === js2);