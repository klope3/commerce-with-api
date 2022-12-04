import React from "react";
import CartItemRow from "../CartItemRow/CartItemRow";

class Cart extends React.Component {
    render() {
        return (
            <div>
                <CartItemRow />
                <CartItemRow />
                <CartItemRow />
                <CartItemRow />
                <CartItemRow />
            </div>
        )
    }
}

export default Cart;