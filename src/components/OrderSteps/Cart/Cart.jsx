import React from "react";
import CartItemRow from "../CartItemRow/CartItemRow";

class Cart extends React.Component {
    render() {
        const { 
            navFunction,
            appStateInfo: {
                cart,
                products,
            },
            changeItemQuantityFunction,

        } = this.props;
        return (
            <div>
                {Object.keys(cart).map(cartKey => ( parseInt(cart[cartKey]) === 0 ? undefined :
                    <CartItemRow
                        key={cartKey} 
                        product={products.find(product => product.name === cartKey)} 
                        quantity={cart[cartKey]} 
                        changeItemQuantityFunction={changeItemQuantityFunction} />)
                )}
                <button name="shipping" onClick={navFunction}>Go To Shipping</button>
            </div>
        )
    }
}

export default Cart;