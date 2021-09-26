/*define>*/define(["./cart", "./inventory"], function(cart, inventory) {/*<function*/
/*return>*/return/*<return*/ {
        color: "blue",
        size: "large",
        addToCart: function() {
            inventory.decrement(this);
            cart.add(this);
        }
    }
/*function>*/}
);/*<define*/