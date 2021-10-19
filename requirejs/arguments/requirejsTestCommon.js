import { findOutermostRequirejs } from '../find.js';
import { createTestParent } from '#root/testCommon.js';

export function createTest(convert,parentUrl) {
    return createTestParent(convert, findOutermostRequirejs,parentUrl);
}