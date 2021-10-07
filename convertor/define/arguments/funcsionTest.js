import { strictEqual } from 'assert/strict';
import { loadFile } from '../../utils/fileUtils.js';
import { findOutermostDefine } from '../find.js';
import { convert } from './funcsion.js';
import {  toAst } from '../../../parser.js';

let js = await loadFile('./cases/2.js',import.meta.url);
let ref = await loadFile('./cases/2.out.js',import.meta.url);
let ast=toAst(js);
let exp = findOutermostDefine(ast);
let js2 = convert(js, exp.node);
//console.log(exp);
strictEqual(ref, js2);

js = await loadFile('./cases/2.1.js',import.meta.url);
ref = await loadFile('./cases/2.1.out.js',import.meta.url);
ast=toAst(js);
exp = findOutermostDefine(ast);
js2 = convert(js, exp.node);
//console.log(js2);
strictEqual(ref, js2);