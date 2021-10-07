import { strictEqual } from 'assert/strict';
import { convert } from './arrayAndFunction.js';
import { loadFile } from '../../../fileUtils.js';
import { toAst } from '../../../parser.js';
import { findOutermostRequirejs } from '../find.js';

let js = await loadFile('./convertor/requirejs/arguments/cases/arrayAndFunction.js');
let ast=toAst(js);
 let ref = await loadFile('./convertor/requirejs/arguments/cases/arrayAndFunction.out.js');
let exp = findOutermostRequirejs(ast);
 let js2 = convert(js, exp.node);
 strictEqual(ref, js2);
 //console.log(js2);