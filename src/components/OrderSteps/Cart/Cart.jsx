import React from "react";
import { calculateCartTotal } from "../../../utility";
import CartItemRow from "../CartItemRow/CartItemRow";
import PriceBreakdown from "../PriceBreakdown/PriceBreakdown";

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
            <div>
                <div>
                    {Object.keys(cart).map(cartKey => ( parseInt(cart[cartKey]) === 0 ? undefined :
                        <CartItemRow
                            key={cartKey} 
                            product={products.find(product => product.name === cartKey)} 
                            quantity={cart[cartKey]} 
                            changeItemQuantityFunction={changeItemQuantityFunction} />)
                    )}
                </div>
                <PriceBreakdown cart={cart} products={products} shippingMethod={shippingMethod} />
                <button name="shipping" onClick={navFunction}>Go To Shipping</button>
            </div>
        )
    }
}

export default Cart;