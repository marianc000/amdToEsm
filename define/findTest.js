import { findOutermostDefine } from './find.js';
import { strictEqual } from 'assert/strict';
import { loadFile } from '../utils/fileUtils.js';
import {  toAst } from '../parser.js';

let js = await loadFile('./arguments/funcsionCases/Squire.js',import.meta.url);
let ast=toAst(js);
let exp=findOutermostDefine(ast);
strictEqual(0, exp.node.start);