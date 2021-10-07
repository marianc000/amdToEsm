import { strictEqual } from 'assert/strict';
import { loadFile } from '../../utils/fileUtils.js';
import { toAst } from '../../../parser.js';

import { findOutermostRequirejs } from '../find.js';
import { convert } from './array.js';

let js = await loadFile('./cases/noFunction.js',import.meta.url);
let ast = toAst(js);
let ref = await loadFile('./cases/noFunction.out.js',import.meta.url);
let exp = findOutermostRequirejs(ast);
let js2 = convert(js, exp.node);
strictEqual(ref, js2);
