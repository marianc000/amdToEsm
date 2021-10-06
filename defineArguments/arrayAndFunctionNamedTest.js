import { strictEqual } from 'assert/strict';
import { loadFile } from '../fileUtils.js';
import { findOutermostDefine } from '../parser.js';
import { convert } from './arrayAndFunctionNamed.js';


let js = await loadFile('./amd/jquery.js');
let ref = await loadFile('./amd/jquery.out.js');
let exp = findOutermostDefine(js);
let js2 = convert(js, exp.node);
//console.log(`>${js2}<`);
strictEqual(js2,ref);
