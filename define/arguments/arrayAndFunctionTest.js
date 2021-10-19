 
import { convert } from './arrayAndFunction.js';
import { createTest } from './defineTestCommon.js';

const test = createTest(convert,import.meta.url);

await test('./arrayAndFunctionCases/3.js', './arrayAndFunctionCases/3.out.js');
await test('./arrayAndFunctionCases/3.1.js', './arrayAndFunctionCases/3.1.out.js');
await test('./arrayAndFunctionCases/3.text.js', './arrayAndFunctionCases/3.text.out.js');
await test('./arrayAndFunctionCases/demo.js', './arrayAndFunctionCases/demo.out.js');