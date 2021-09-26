import cart from './cart.js';
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
/*function>*//*<define*/