import { strictEqual } from 'assert/strict';
import { loadFile } from '../../utils/fileUtils.js';
import { findOutermostDefine } from '../find.js';
import { convert } from './object.js';
import {  toAst } from '../../../parser.js';

let js = await loadFile('./cases/1.js',import.meta.url);
let ref = await loadFile('./cases/1.out.js',import.meta.url);
let ast=toAst(js);
let exp = findOutermostDefine(ast);
let js2 = convert(js, exp.node);

strictEqual(ref, js2);
