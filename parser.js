import * as acorn from "acorn";

import { choseRequireJsConverter } from './requirejs/choose.js';
import { choseDefineConverter } from './define/choose.js';
import { findOutermostRequirejs } from './requirejs/find.js';
import { findOutermostDefine } from './define/find.js';

export function toAst(txt) {
  return acorn.parse(txt, { ecmaVersion: 2022 });
}

export function toAst2(txt) {
  return acorn.parse(txt, { ecmaVersion: 2022, sourceType: "module" });
}


// export function findAllRequirejs(ast) {
//   const nodes = [];
//   let from = 0;
//   let exp;
//   while (exp = walk.findNodeAfter(ast, from, predicateRequirejs)) {
//     nodes.push(exp);
//     from = exp.node.start + 1;
//   }
//   //console.log(nodes);
//   return nodes;
// }

export function convert(js) {
  //console.log(">convert", js);
  let ast = toAst(js);
  let js2;
  let exp = findOutermostDefine(ast);
  if (exp)
    js2 = choseDefineConverter(js, exp.node);
  else {
    exp = findOutermostRequirejs(ast);
    if (exp)
      js2 = choseRequireJsConverter(js, exp.node);
  }

  if (!js2) throw 'No define()';
  try {
    let ast2 = toAst2(js2);
    let exp2 = findOutermostRequirejs(ast2);
    if (!exp2) return js2;
    return choseRequireJsConverter(js2, exp2.node);
  } catch (ex) {
    //console.log("ex=",ex.message,"<<<");
    if (ex.message?.startsWith("'import' and 'export' may only appear at the top level")) return js2; //like in jquery
    throw ex;
  }
}