import { ok } from 'assert/strict';
import { findJsFiles } from './walk.js';
 
const files=findJsFiles(".", ".js");
ok(files.length>1);
ok(files.every(f=>f.endsWith(".js")));