import { strictEqual } from 'assert/strict';
import { loadFile } from '../../../fileUtils.js';
import { toAst } from '../../../parser.js';

import { findOutermostRequirejs } from '../find.js';
import { convert } from './array.js';

let js = await loadFile('./convertor/requirejs/arguments/cases/noFunction.js');
let ast=toAst(js);
let ref = await loadFile('./convertor/requirejs/arguments/cases/noFunction.out.js');
let exp = findOutermostRequirejs(ast);
 let js2 = convert(js, exp.node);
 strictEqual(ref, js2);
