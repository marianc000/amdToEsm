import { strictEqual } from 'assert/strict';
import { loadFile } from '../../utils/fileUtils.js';
import {  toAst } from '../../../parser.js';
import { convert } from './arrayAndFunction.js';
import { findOutermostDefine } from '../find.js';

let js = await loadFile('./cases/3.js',import.meta.url);
let ref = await loadFile('./cases/3.out.js',import.meta.url);
let ast=toAst(js);
let exp = findOutermostDefine(ast);
let js2 = convert(js, exp.node);
//console.log(`>${js2}<`);
strictEqual(ref, js2);

js = await loadFile('./cases/3.1.js',import.meta.url);
ref = await loadFile('./cases/3.1.out.js',import.meta.url);
ast=toAst(js);
exp = findOutermostDefine(ast);
js2 = convert(js, exp.node);
// console.log(js2);
strictEqual(ref, js2);

js = await loadFile('./cases/3.text.js',import.meta.url);
ref = await loadFile('./cases/3.text.out.js',import.meta.url);
ast=toAst(js);
exp = findOutermostDefine(ast);
js2 = convert(js, exp.node);
 //console.log(js2);
 strictEqual(ref, js2);
 