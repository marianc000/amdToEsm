
import { replace } from '../../utils/strUtils.js';

export function removeRequirejs(js, node, ar) {

  const imports = ar.elements.map(el => `import('${el.value}');\r\n`);
  return replace(js, node.start, node.end, imports);
}
 
export function convert(js, node) {
  const [ar] = node.expression.arguments;
  return removeRequirejs(js, node, ar);
}