
import { removeDefine } from './funcsion.js';
import { toImports } from './utils/imports.js';


export function convert(js, node) {

  const [ar, func] = node.expression.arguments;
  const funcBody = func.body;

  let js2 = removeDefine(js, node, funcBody);
  //console.log(js2);

  const paths = ar.elements.map(el => el.value);
  const vars = func.params.map(p => p.name);

  let imports = toImports(paths, vars);
  return imports + '\r\n\r\n' + js2;
}


