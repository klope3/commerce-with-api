import React from "react";
import { calculateCartTotal } from "../../../utility";
import CartItemRow from "../CartItemRow/CartItemRow";
import PriceBreakdown from "../PriceBreakdown/PriceBreakdown";
import "./Cart.css";

class Cart extends React.Component {
    render() {
        const { 
            navFunction,
            appStateInfo: {
                cart,
                products,
            },
            shippingMethod,
            changeItemQuantityFunction,

        } = this.props;
        return (
            <div className="order-step-flex">
                <div className="order-step-heading">Your Cart</div>
                <div className="order-step-input-area" id="cart-area">
                    {Object.keys(cart).map(cartKey => ( parseInt(cart[cartKey]) === 0 ? undefined :
                        <CartItemRow
                            key={cartKey} 
                            product={products.find(product => product.name === cartKey)} 
                            quantity={cart[cartKey]} 
                            changeItemQuantityFunction={changeItemQuantityFunction} />)
                    )}
                </div>
                <div>
                    <PriceBreakdown cart={cart} products={products} shippingMethod={shippingMethod} />
                    <button name="shipping" className="button-major" onClick={navFunction}>Go To Shipping</button>
                </div>
            </div>
        )
    }
}

export default Cart;