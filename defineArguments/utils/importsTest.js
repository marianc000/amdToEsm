import { strictEqual } from 'assert/strict';
import { getImport, toImports } from './imports.js';

strictEqual(getImport('a', './cart') , "import a from './cart.js';");
strictEqual(getImport('a', 'cart') , "import a from 'cart';");
strictEqual(getImport('a', '../cart') , "import a from '../cart.js';");
strictEqual(getImport(null, '../cart') , "import '../cart.js';");

strictEqual(toImports(["./cart", "../inventory", 'test'], ['cart', 'inventory']) ,
 "import cart from './cart.js';\r\n"+
"import inventory from '../inventory.js';\r\n"+
"import 'test';");