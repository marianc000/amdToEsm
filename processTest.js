import { loadFile } from './fileUtils.js';
import {adjustNewlines} from './strUtils.js';
import { convert,replaceDefineWithExport } from './process.js';
import { getDefineData } from './parser.js';

let js = await loadFile('./amd/3.js');

const { paths, vars, start, end, ret } = getDefineData(js)
let js2 = replaceDefineWithExport(js,start, end, ret);
  
console.assert(adjustNewlines(js2 ) === `/*define>*//*<function*/
/*return>*/export default/*<return*/ {
        color: "blue",
        size: "large",
        addToCart: function() {
            inventory.decrement(this);
            cart.add(this);
        }
    }
/*function>*//*<define*/`);

let js3=convert(js);
//console.log(js3);
console.assert(adjustNewlines(js3 ) === `import cart from './cart.js';
import inventory from './inventory.js';

/*define>*//*<function*/
/*return>*/export default/*<return*/ {
        color: "blue",
        size: "large",
        addToCart: function() {
            inventory.decrement(this);
            cart.add(this);
        }
    }
/*function>*//*<define*/`);