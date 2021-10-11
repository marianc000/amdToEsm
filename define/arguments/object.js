import { splice } from 'utils/strUtils.js';

const DEFINE_RE= /define\s*\(/;

export function convert(js, node) {
  let js2 = splice(js, node.expression.end - 1, node.end);
  return js2.substring(0, node.start)  + js2.substring(node.start).replace(DEFINE_RE,'export default');
}