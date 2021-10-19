 
import { convert } from './arrayAndFunctionNamed.js';
import { createTest } from './defineTestCommon.js';

const test = createTest(convert,import.meta.url);
await test('./arrayAndFunctionNamedCases/jquery.js', './arrayAndFunctionNamedCases/jquery.out.js');
 