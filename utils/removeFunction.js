import { splice} from './strUtils.js';
import { toImports } from './imports.js';

export function removeFunction(js, node, funcBody) {
    let js2 = splice(js, funcBody.end - 1, node.end);

    const ret = funcBody.body.find(s => s.type === 'ReturnStatement')?.start;

    if (ret) {
        const tmp = js2.substring(ret).replace('return', 'export default');
        js2 = js2.substring(0, ret) + tmp;
    }

    js2 = splice(js2, node.start, funcBody.start + 1);
    return js2;
}

export function convertFunction(js, node, ar, func) {

    const funcBody = func.body;

    let js2 = removeFunction(js, node, funcBody);

    const paths = ar.elements.map(el => el.value);
    const vars = func.params.map(p => p.name);

    let imports = toImports(paths, vars);
    return imports + '\r\n\r\n' + js2;
}