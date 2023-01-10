import React from "react";

class ProductCartControls extends React.Component {
    render() {
        const {
            name,
            quantityInCart,
            changeItemQuantityFunction,
        } = this.props;
        return (
            <div>
                {parseInt(quantityInCart) === 0 && 
                    <button 
                        name="addToCartButton" 
                        className="button-major" 
                        onClick={changeItemQuantityFunction} 
                        data-product-name={name}>
                            Add to Cart
                    </button>
                }
                {quantityInCart > 0 && 
                    <input 
                        type="number" 
                        value={quantityInCart} 
                        onChange={changeItemQuantityFunction} 
                        data-product-name={name} 
                    />
                }
            </div>
        )
    }
}

export default ProductCartControls;