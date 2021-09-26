import { loadFile } from './fileUtils.js';
import {replaceDefineWithExport}from './process.js';

let js = await loadFile('./amd/3.js');
let js2= replaceDefineWithExport(js); 
console.log(js2);