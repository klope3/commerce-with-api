import React from "react";
import "./ProductReviewRow.css";

class ProductReviewRow extends React.Component {
    render() {
        const {
            product,
            quantity,
        } = this.props;
        return (
            <div className="product-review-row">
                <div className="product-review-img" style={{backgroundImage: `url(${product.image.url})`}}></div>
                <div className="product-review-info">
                    <div className="bold-text">{product.name}</div>
                    <div>Qty: {quantity}</div>
                    <div className="bold-text">{product.price.formatted_with_symbol}</div>
                </div>
            </div>
        )
    }
}

export default ProductReviewRow;