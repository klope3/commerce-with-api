import React from "react";

class CartItemRow extends React.Component {
    render() {
        const { product, quantity, changeItemQuantityFunction } = this.props;
        return (
            <div>
                <div>{product.name}</div>
                <div><input type="number" name="" id="" value={quantity} min="1" onChange={changeItemQuantityFunction} data-product-name={product.name}/></div>
                <div><button name="removeFromCartButton" data-product-name={product.name} onClick={changeItemQuantityFunction}>Remove</button></div>
            </div>
        )
    }
}

export default CartItemRow;