import { findOutermostDefine } from '../find.js';
import { createTestParent } from '#root/testCommon.js';

export function createTest(convert,parentUrl) {
    return createTestParent(convert, findOutermostDefine,parentUrl);
}