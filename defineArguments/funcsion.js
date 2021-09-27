import { splice } from '../utils/strUtils.js';

export function removeDefine(js, node, funcBody) {
  let js2 = splice(js, funcBody.end - 1, node.end);
  // console.log(js2);

  const ret = funcBody.body.find(s => s.type === 'ReturnStatement')?.start;

  if (ret) {
    const tmp = js2.substring(ret).replace('return', 'export default');
    js2 = js2.substring(0, ret) + tmp;
  }

  //console.log(js2);

  js2 = splice(js2, node.start, funcBody.start + 1);
  //console.log(js2);
  return js2;
}

export function convert(js, node) {
  // console.log(">objectArgument", node);
  const funcBody = node.expression.arguments[0].body;
  return removeDefine(js, node, funcBody);
}


