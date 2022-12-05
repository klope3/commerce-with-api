import React from "react";
import CartItemRow from "../CartItemRow/CartItemRow";

class Cart extends React.Component {
    render() {
        const { 
            navFunction,
        } = this.props;
        return (
            <div>
                <CartItemRow />
                <CartItemRow />
                <CartItemRow />
                <CartItemRow />
                <CartItemRow />
                <button name="shipping" onClick={navFunction}>Go To Shipping</button>
            </div>
        )
    }
}

export default Cart;