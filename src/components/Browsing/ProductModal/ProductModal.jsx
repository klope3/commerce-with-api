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
        const info = [
            {
                heading: "Author",
                value: attributes.find(attribute => attribute.name === "Author").value[0].value,
            },
            {
                heading: "File Formats",
                value: attributes.find(attribute => attribute.name === "File Formats").value.map(item => <div key={item.label} className="file-format">{item.label}</div>),
                extraClass: "file-formats-flex",
            },
            {
                heading: "Polygon Count",
                value: attributes.find(attribute => attribute.name === "Polygon Count").value,
            },
            {
                heading: "Publication Date",
                value: attributes.find(attribute => attribute.name === "Publication Date").value,
            },
            {
                heading: "Game Ready?",
                value: attributes.find(attribute => attribute.name === "Game Ready").value ? "✔️Yes" : "❌No",
            },
            {
                heading: "Animation Ready?",
                value: attributes.find(attribute => attribute.name === "Animation Ready").value ? "✔️Yes" : "❌No",
            },
        ]
        return (
            <div className="product-modal-container">
                <div className="product-modal">
                    <img src={imgUrl}></img>
                    <div className="product-modal-flex">
                        <div className="product-info-alpha">
                            <h2>{name}</h2>
                            <div>{description.replace(/(<p>|<\/p>)/g, "")}</div>
                            <div className="product-modal-price-flex">
                                <ProductCartControls 
                                    name={name} 
                                    changeItemQuantityFunction={changeItemQuantityFunction} 
                                    quantityInCart={quantityInCart} 
                                />
                                <div className="product-modal-price">{price}</div>
                            </div>
                        </div>
                        <div className="product-info-beta">
                            {info.map(info => (
                                <div key={info.heading} className="product-info-block">
                                    <div className="product-info-heading">{info.heading}</div>
                                    <div className={`${info.extraClass} product-info-value`}>{info.value}</div>
                                </div>))
                            }
                        </div>
                    </div>
                    <FontAwesomeIcon 
                        icon={faXmark} 
                        className="product-modal-x" 
                        onClick={focusProductFunction} 
                        data-product-focus-name={undefined} 
                    />
                </div>
            </div>
        )
    }
}

export default ProductModal;