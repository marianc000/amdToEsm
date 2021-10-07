
import { replace } from '../../../utils/strUtils.js';
import { toImports } from '../../../defineArguments/utils/imports.js';

export function removeRequirejs(js, node, ar) {

  const imports = ar.elements.map(el => `import('${el.value}');\r\n`);
  let js2 = replace(js, node.start, node.end, imports);
  // console.log(js2);

  // const ret = funcBody.body.find(s => s.type === 'ReturnStatement')?.start;

  // if (ret) {
  //   const tmp = js2.substring(ret).replace('return', 'export default');
  //   js2 = js2.substring(0, ret) + tmp;
  // }

  // //console.log(js2);

  // js2 = splice(js2, node.start, funcBody.start + 1);
  // //console.log(js2);
  return js2;
}
 
export function convert(js, node) {
  const [ar] = node.expression.arguments;
  return removeRequirejs(js, node, ar);
}