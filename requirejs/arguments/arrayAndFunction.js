import {convertFunction} from 'utils/removeFunction.js';
 
export function convert(js, node) {
  const [ar, func] = node.expression.arguments;
  return convertFunction(js, node, ar, func);
}