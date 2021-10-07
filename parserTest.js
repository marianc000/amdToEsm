import { strictEqual } from 'assert/strict';
import { loadFile } from './fileUtils.js';
import { convert, findOutermostDefine, toAst, findAllRequirejs } from './parser.js';

let js, js2, ref;

// js = await loadFile('./amd/1.js');
// ref = await loadFile('./amd/1.out.js');
// js2 = convert(js);
// strictEqual(ref, js2);

// js = await loadFile('./amd/2.js');
// ref = await loadFile('./amd/2.out.js');
// js2 = convert(js);
// strictEqual(ref, js2);

// js = await loadFile('./amd/3.js');
// ref = await loadFile('./amd/3.out.js');
// js2 = convert(js);
// strictEqual(ref, js2);

// js = await loadFile('./amd/Squire.js');
// let exp=findOutermostDefine(js);
// strictEqual(0, exp.node.start);

// js = await loadFile('./amd/jquery.js');
//   ref = await loadFile('./amd/jquery.out.js');
//  js2 = convert(js );
// strictEqual(js2,ref);

js = await loadFile('./amd/requirejsNested.js');
let ast= toAst(js);
let exp = findOutermostDefine(ast);
console.log(exp);
exp = findAllRequirejs(ast);
 console.log(exp);
