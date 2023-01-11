import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./CartItemRow.css";

class CartItemRow extends React.Component {
    render() {
        const { 
            product, 
            quantity, 
            changeItemQuantityFunction 
        } = this.props;
        return (
            <div className="cart-item-row">
                <div className="cart-item-img" style={{backgroundImage: `url(${product.image.url})`}}></div>
                <div className="cart-item-info-flex">
                    <div className="cart-item-data">
                        <div className="bold-text">{product.name}</div>
                        <div className="minor-text">File Formats:</div> 
                        <div className="file-formats-flex">
                            {product.attributes
                                .find(attribute => attribute.name === "File Formats").value
                                .map(item => (
                                    <div key={item.label} className="file-format">{item.label}</div>)
                                )
                            }
                        </div>
                    </div>
                    <div className="bold-text">{product.price.formatted_with_symbol}</div>
                    <div className="cart-item-quantity">
                        <input 
                            type="number" 
                            value={quantity} 
                            min="1" 
                            onChange={changeItemQuantityFunction} 
                            data-product-name={product.name}
                        />
                    </div>
                    <button 
                        className="button-remove" 
                        name="removeFromCartButton" 
                        data-product-name={product.name} 
                        onClick={changeItemQuantityFunction}
                    >
                        <FontAwesomeIcon className="min-768" icon={faXmark} />
                        <span className="max-768" style={{pointerEvents: "none"}}>Remove</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default CartItemRow;