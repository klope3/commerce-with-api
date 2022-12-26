import React from "react";
import "./ProductModal.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductCartControls from "../ProductCartControls/ProductCartControls";

class ProductModal extends React.Component {
    render() {
        const { 
            product: { 
                name, 
                description, 
                price: { formatted_with_symbol: price },
                image: { url: imgUrl },
                attributes,
            }, 
            quantityInCart,
            changeItemQuantityFunction,
            focusProductFunction,
        } = this.props;
        return (
            <div className="product-modal-container">
                <div className="product-modal">
                    <img src={imgUrl}></img>
                    <div>{name}</div>
                    <div>{description.replace(/(<p>|<\/p>)/g, "")}</div>
                    <div>{price}</div>
                    <ProductCartControls name={name} changeItemQuantityFunction={changeItemQuantityFunction} quantityInCart={quantityInCart} />
                    <FontAwesomeIcon icon={faXmark} className="product-modal-x" onClick={focusProductFunction} data-product-focus-name={undefined} />
                </div>
            </div>
        )
    }
}

export default ProductModal;