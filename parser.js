import * as acorn from "acorn";
import * as walk from "acorn-walk";


// console.log("read: ", txt);
// console.log("========================================================");

// console.log(tree);
// console.log("========================================================");
// walk.simple(tree, {
//     CallExpression(node) {
//         console.log(">>>>>>>>>>>>>>found");  
//       console.log(node);
//     }
//   })
//   console.log("========================================================");
function predicate(nodeType, node) {
  return nodeType === 'ExpressionStatement' && node?.expression?.callee?.name === 'define';
}

export function findDefine(txt) {
  let tree = acorn.parse(txt, { ecmaVersion: 2020 });
  return walk.findNodeAt(tree, null, null, predicate);
}

export function pathsAndParams({ node }) {
  //console.log(">",node);
  const start = { s: node.start };
  const end = { e: node.end };

  const args = node.expression.arguments;
  //console.log(">",args);
  if (!args) return;
  if (args.length != 2) throw 'Not two arguments in define';
  const [ar, func] = args;
  const funcBody = func.body;
  end.s = funcBody.end;
  start.e = funcBody.start;
  const ret = funcBody.body.find(s => s.type === 'ReturnStatement')?.start;

  const paths = ar.elements.map(el => el.value);
  const vars = func.params.map(p => p.name);
  return { paths, vars, start, end ,ret};
}

