import { convert } from './object.js';
import { createTest } from './defineTestCommon.js';

const test = createTest(convert,import.meta.url);

await test('./objectCases/1.js','./objectCases/1.out.js' );
await test('./objectCases/demo.js','./objectCases/demo.out.js' );
 