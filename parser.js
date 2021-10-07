import * as acorn from "acorn";
import * as walk from "acorn-walk";
import { convert as fromObject } from './defineArguments/object.js';
import { convert as fromFunction } from './defineArguments/funcsion.js';
import { convert as fromArrayAndFunction } from './defineArguments/arrayAndFunction.js';
import { convert as fromArrayAndFunctionNamed } from './defineArguments/arrayAndFunctionNamed.js';
import {choseRequireJsConverter} from './convertor/requirejs/choose.js';

function predicateDefine(nodeType, node) {
  return nodeType === 'ExpressionStatement' && node?.expression?.callee?.name === 'define';
}



export function toAst(txt) {
  return acorn.parse(txt, { ecmaVersion: 2022 });
}

export function findOutermostDefine(ast) {
  return walk.findNodeBefore(ast, Number.MAX_VALUE, predicateDefine);
}



export function findAllRequirejs(ast) {
  const nodes = [];
  let from = 0;
  let exp;
  while (exp = walk.findNodeAfter(ast, from, predicateRequirejs)) {
    nodes.push(exp);
    from = exp.node.start + 1;
  }
  //console.log(nodes);
  return nodes;
}



export function choseDefineConverter(js, node) {
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

  if (args.length === 3
    && args[0].type === 'Literal'
    && args[1].type === 'ArrayExpression'
    && args[2].type === 'FunctionExpression') return fromArrayAndFunctionNamed(js, node);

  throw 'Unsupported define arguments';
}

export function convert(js) {
  const ast = toAst(js);
  let exp = findOutermostDefine(ast);
  if (exp) return choseDefineConverter(js, exp.node);

  exp = findOutermostRequirejs(ast);
  if (exp) choseRequireJsConverter(js, exp);
  throw 'No define()';
}