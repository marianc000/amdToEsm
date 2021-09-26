import { getImport, toImports } from './imports.js';

console.assert(getImport('a', './cart') === "import a from './cart.js';");
console.assert(getImport('a', 'cart') === "import a from 'cart';");
console.assert(getImport('a', '../cart') === "import a from '../cart.js';");
console.assert(getImport(null, '../cart') === "import '../cart.js';");

console.assert(toImports(["./cart", "../inventory", 'test'], ['cart', 'inventory']) === `import cart from './cart.js';
import inventory from '../inventory.js';
import 'test';`);