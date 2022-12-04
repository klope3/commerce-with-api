import React from "react";
import "./ProductCard.css";

class ProductCard extends React.Component {
    render() {
        const { 
            product: { 
                name, 
                description, 
                price, 
                image 
            } 
        } = this.props;
        return (
            <div className="product-card">
                <div><img src={image}></img></div>
                <div>{name}</div>
                <div>{description}</div>
                <div>{`$${price}`}</div>
            </div>
        )
    }
}

export default ProductCard;