import { splice } from './strUtils.js';
import { getDefineData } from './parser.js';
import {toImports} from './imports.js';

export function convert(js) {
    const { paths, vars, start, end, ret } = getDefineData(js)
    let js2 = replaceDefineWithExport(js,start, end, ret);
    let imports=toImports(paths, vars);
    return imports+'\n\n'+js2;
}

export function replaceDefineWithExport(js,start, end, ret) {
 
    let js2 = splice(js, end.s - 1, end.e);
    //console.log(newJs);

    if (ret) {
        const tmp = js2.substring(ret).replace('return', 'export default');
        js2 = js2.substring(0, ret) + tmp;
    }

    //console.log(newJs);
    js2 = splice(js2, start.s, start.e + 1);
    //  console.log(js2);
    return js2;
}