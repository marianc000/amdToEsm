import { findNodeBefore } from "acorn-walk";

function predicateDefine(nodeType, node) {
    return nodeType === 'ExpressionStatement' && node?.expression?.callee?.name === 'define';
}

export function findOutermostDefine(ast) {
    return findNodeBefore(ast, Number.MAX_VALUE, predicateDefine);
}