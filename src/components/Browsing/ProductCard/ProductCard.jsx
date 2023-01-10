import React from "react";
import ProductCartControls from "../ProductCartControls/ProductCartControls";
import "./ProductCard.css";

class ProductCard extends React.Component {
    render() {
        const { 
            product: { 
                name, 
                price: { formatted_with_symbol: price },
                image: { url: imgUrl },
            },
            changeItemQuantityFunction, 
            focusProductFunction,
            quantityInCart,
        } = this.props;
        return (
            <div className="product-card" style={{backgroundImage: `url(${imgUrl})`}}>
                <div className="product-card-overlay" onClick={focusProductFunction} data-product-focus-name={name}>
                    <div className="product-card-title-bar">
                        <div>{name}</div>
                        <div className="product-card-price">{price}</div>
                    </div>
                </div>
                <div className="product-card-input-container">
                    <ProductCartControls 
                        name={name} 
                        changeItemQuantityFunction={changeItemQuantityFunction} 
                        quantityInCart={quantityInCart} 
                    />
                </div>
            </div>
        )
    }
}

export default ProductCard;