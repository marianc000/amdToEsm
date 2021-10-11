import { findNodeBefore } from "acorn-walk";

export function predicateRequirejs(nodeType, node) {
    return nodeType === 'ExpressionStatement' && node?.expression?.callee?.name === 'requirejs';
}

export function findOutermostRequirejs(ast) {
    return findNodeBefore(ast, Number.MAX_VALUE, predicateRequirejs);
}