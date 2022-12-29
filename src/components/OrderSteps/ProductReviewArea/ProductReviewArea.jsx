import React from "react";
import ProductReviewRow from "../ProductReviewRow/ProductReviewRow";

class ProductReviewArea extends React.Component {
    render() {
        const {
            appStateInfo: {
                cart,
                products,
            },
        } = this.props;
        return (
            <div>
                {Object.keys(cart).map(cartKey => (
                    <>{cart[cartKey] > 0 && <ProductReviewRow 
                        key={cartKey}
                        product={products.find(product => product.name === cartKey)} 
                        quantity={cart[cartKey]} 
                    />}</>
                ))}
            </div>
        )
    }
}

export default ProductReviewArea;