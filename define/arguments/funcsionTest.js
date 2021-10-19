import { convert } from './funcsion.js';
import { createTest } from './defineTestCommon.js';

const test = createTest(convert,import.meta.url);

await test('./funcsionCases/2.js', './funcsionCases/2.out.js');
await test('./funcsionCases/2.1.js', './funcsionCases/2.1.out.js');
await test('./funcsionCases/demo.js', './funcsionCases/demo.out.js');