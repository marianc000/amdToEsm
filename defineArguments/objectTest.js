import { strictEqual } from 'assert/strict';
import { loadFile } from '../fileUtils.js';
import { findDefine } from '../parser.js';
import { convert } from './object.js';


let js = await loadFile('./amd/1.js');
let ref = await loadFile('./amd/1.out.js');
const exp = findDefine(js);
let js2 = convert(js, exp.node);

strictEqual(ref, js2);
