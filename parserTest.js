import { loadFile } from './fileUtils.js';
import { getDefineData } from './parser.js';
let js;
let r;

js = await loadFile('./amd/1.js');
r = getDefineData(js);
console.log(JSON.stringify(r));

js = await loadFile('./amd/3.js');

r = getDefineData(js)
//console.log(JSON.stringify(r));

console.assert(JSON.stringify(r) === '{"paths":["./cart","./inventory"],"vars":["cart","inventory"],"start":{"s":11,"e":71},"end":{"e":305,"s":301},"ret":98}');