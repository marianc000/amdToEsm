import * as acorn from "acorn";
import * as walk from "acorn-walk";
import { convert as fromObject } from './defineArguments/object.js';
import { convert as fromFunction } from './defineArguments/funcsion.js';
import { convert as fromArrayAndFunction } from './defineArguments/arrayAndFunction.js';

function predicate(nodeType, node) {
  return nodeType === 'ExpressionStatement' && node?.expression?.callee?.name === 'define';
}

export function findDefine(txt) {
  let tree = acorn.parse(txt, { ecmaVersion: 2020 });
  return walk.findNodeAt(tree, null, null, predicate);
}

export function choseConverter(js, node) {
  //console.log(">",node);
  const args = node.expression.arguments;
  //console.log(">", args);
  if (args.length === 1) {
    if (args[0].type === 'ObjectExpression') return fromObject(js, node);
    if (args[0].type === 'FunctionExpression') return fromFunction(js, node);
  }

  if (args.length === 2
    && args[0].type === 'ArrayExpression'
    && args[1].type === 'FunctionExpression') return fromArrayAndFunction(js, node);
  
    throw 'Unsupported define arguments';
}

export function convert(js) {
  const exp = findDefine(js);
  if (!exp) throw 'No define()';
  return choseConverter(js, exp.node);
}



