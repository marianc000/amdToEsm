import * as acorn from "acorn";
import * as walk from "acorn-walk";
import { convert as fromObject } from './convertor/define/arguments/object.js';
import { convert as fromFunction } from './convertor/define/arguments/funcsion.js';
import { convert as fromArrayAndFunction } from './convertor/define/arguments/arrayAndFunction.js';
import { convert as fromArrayAndFunctionNamed } from './convertor/define/arguments/arrayAndFunctionNamed.js';
import {choseRequireJsConverter} from './convertor/requirejs/choose.js';



export function toAst(txt) {
  return acorn.parse(txt, { ecmaVersion: 2022 });
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




export function convert(js) {
  const ast = toAst(js);
  let exp = findOutermostDefine(ast);
  if (exp) return choseDefineConverter(js, exp.node);

  exp = findOutermostRequirejs(ast);
  if (exp) choseRequireJsConverter(js, exp);
  throw 'No define()';
}