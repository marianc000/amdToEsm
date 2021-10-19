import { convert } from './array.js';
import { createTest } from './requirejsTestCommon.js';

const test = createTest(convert,import.meta.url);
await test('./arrayOnlyCases/noFunction.js', './arrayOnlyCases/noFunction.out.js');
await test('./arrayOnlyCases/demo.js', './arrayOnlyCases/demo.out.js');