import { convert as fromArray } from './arguments/array.js';
import { convert as fromArrayAndFunction } from './arguments/arrayAndFunction.js';

export function choseRequireJsConverter(js, node) {

  const args = node.expression.arguments;
 // console.log(">", args);
  if (args.length === 1 && args[0].type === 'ArrayExpression') return fromArray(js, node);

  if (args.length === 2
    && args[0].type === 'ArrayExpression'
    && args[1].type === 'FunctionExpression') return fromArrayAndFunction(js, node);

  throw 'Unsupported define arguments';
}