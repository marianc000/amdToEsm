import { strictEqual } from 'assert/strict';
import { loadFile } from '#utils/fileUtils.js';
import { findOutermostDefine } from '../find.js';
import { convert } from './arrayAndFunctionNamed.js';
import {  toAst } from '#root/parser.js';

let js = await loadFile('./arrayAndFunctionNamedCases/jquery.js',import.meta.url);
let ref = await loadFile('./arrayAndFunctionNamedCases/jquery.out.js',import.meta.url);
let ast=toAst(js);
let exp = findOutermostDefine(ast);
let js2 = convert(js, exp.node);
//console.log(`>${js2}<`);
strictEqual(js2,ref);