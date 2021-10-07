import { convertShared} from './arrayAndFunction.js';

export function convert(js, node) {

  const [name,ar, func] = node.expression.arguments;
  return convertShared(js, node, ar, func)
}