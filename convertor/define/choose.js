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