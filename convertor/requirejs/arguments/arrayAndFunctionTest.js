import { strictEqual } from 'assert/strict';
import { convert } from './arrayAndFunction.js';
import { loadFile } from '../../utils/fileUtils.js';
import { toAst } from '../../../parser.js';
import { findOutermostRequirejs } from '../find.js';

let js = await loadFile('./cases/arrayAndFunction.js',import.meta.url);
let ast=toAst(js);
 let ref = await loadFile('./cases/arrayAndFunction.out.js',import.meta.url);
let exp = findOutermostRequirejs(ast);
 let js2 = convert(js, exp.node);
 strictEqual(ref, js2);
 //console.log(js2);