import React from "react";
import ProductReviewRow from "../ProductReviewRow/ProductReviewRow";
import "./ProductReviewArea.css";

class ProductReviewArea extends React.Component {
    render() {
        const {
            appStateInfo: {
                cart,
                products,
            },
        } = this.props;
        return (
            <div className="product-review-area">
                {Object.keys(cart).map(cartKey => (
                    cart[cartKey] > 0 && 
                        <ProductReviewRow 
                            key={cartKey}
                            product={products.find(product => product.name === cartKey)} 
                            quantity={cart[cartKey]} 
                        />
                    )
                )}
            </div>
        )
    }
}

export default ProductReviewArea;