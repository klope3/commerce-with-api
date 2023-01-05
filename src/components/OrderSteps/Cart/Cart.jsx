import { faArrowRight, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        const emptyCart = Object.keys(cart).reduce((accum, key) => accum + cart[key], 0) === 0;
        return (
            <div className="order-step-flex">
                <div>
                    <div className="order-step-heading">Your Cart</div>
                    <div className="order-step-icon"><FontAwesomeIcon icon={faCartShopping} /></div>
                </div>
                <div className="order-step-input-area" id="cart-area">
                    {emptyCart && <div className="empty-cart-message">Your cart is empty.</div>}
                    {!emptyCart && Object.keys(cart).map(cartKey => ( parseInt(cart[cartKey]) === 0 ? undefined :
                        <CartItemRow
                            key={cartKey} 
                            product={products.find(product => product.name === cartKey)} 
                            quantity={cart[cartKey]} 
                            changeItemQuantityFunction={changeItemQuantityFunction} />)
                    )}
                </div>
                <div>
                    <PriceBreakdown cart={cart} products={products} shippingMethod={shippingMethod} />
                    <button 
                        name="shipping" 
                        className="button-major button-big" 
                        onClick={navFunction} disabled={emptyCart}>
                            Go To Shipping  <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        )
    }
}

export default Cart;