import { splice } from '../../utils/strUtils.js';

export function convert(js, node) {
 // console.log(">objectArgument", node);
  let js2 = splice(js, node.expression.end - 1, node.end);
  return js2.substring(0, node.start)
    + js2.substring(node.start).replace(/define\s*\(/, 'export default');
}


