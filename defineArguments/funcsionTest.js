import { loadFile } from '../fileUtils.js';
import { findDefine } from '../parser.js';
import { convert } from './funcsion.js';


let js = await loadFile('./amd/2.js');
let ref = await loadFile('./amd/2.out.js');
let exp = findDefine(js);
let js2 = convert(js, exp.node);
//console.log(exp);
console.assert(ref === js2);

js = await loadFile('./amd/2.1.js');
ref = await loadFile('./amd/2.1.out.js');
exp = findDefine(js);
js2 = convert(js, exp.node);
//console.log(js2);
console.assert(ref === js2);