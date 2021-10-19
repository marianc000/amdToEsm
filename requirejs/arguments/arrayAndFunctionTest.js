import { convert } from './arrayAndFunction.js';
import { createTest } from './requirejsTestCommon.js';

const test = createTest(convert,import.meta.url);
await test('./arrayAndFunctionCases/arrayAndFunction.js', './arrayAndFunctionCases/arrayAndFunction.out.js');
await test('./arrayAndFunctionCases/demo.js', './arrayAndFunctionCases/demo.out.js');