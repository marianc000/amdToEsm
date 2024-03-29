import { convert as fromObject } from './arguments/object.js';
import { convert as fromFunction } from './arguments/funcsion.js';
import { convert as fromArrayAndFunction } from './arguments/arrayAndFunction.js';
import { convert as fromArrayAndFunctionNamed } from './arguments/arrayAndFunctionNamed.js';

export function choseDefineConverter(js, node) {
  const args = node.expression.arguments;
  
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