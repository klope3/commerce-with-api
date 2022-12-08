import React from "react";
import "./ProductCard.css";

class ProductCard extends React.Component {
    render() {
        const { 
            product: { 
                name, 
                description, 
                price: { formatted_with_symbol: price },
                image: { url: imgUrl },
            } 
        } = this.props;
        return (
            <div className="product-card">
                <div><img src={imgUrl}></img></div>
                <div>{name}</div>
                <div>{description.replace(/(<p>|<\/p>)/g, "")}</div>
                <div>{price}</div>
            </div>
        )
    }
}

export default ProductCard;