import { loadFile } from './fileUtils.js';
import { splice } from './strUtils.js';
import { findDefine, pathsAndParams } from './parser.js';

let txt = await loadFile('./amd/3.js');

const exp = findDefine(txt);
//console.log(exp);
console.assert(exp, 'cannot find define');
const r = pathsAndParams(exp);
console.log(r);
let newJs = splice(txt,r.end.s - 1,r.end.e);
//console.log(newJs);
//newJs=newJs.substring(0,r.ret );
if (r.ret) {
    const tmp = newJs.substring(r.ret).replace('return', 'export default');
    newJs = newJs.substring(0, r.ret) + tmp;
}

//console.log(newJs);
newJs = splice(newJs, r.start.s,r.start.e+1);
console.log(newJs);