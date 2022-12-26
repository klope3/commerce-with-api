import React from "react";

class ProductReviewRow extends React.Component {
    render() {
        const {
            product,
            quantity,
        } = this.props;
        return (
            <div>
                <div>{product.name}</div>
                <div>Qty: {quantity}</div>
            </div>
        )
    }
}

export default ProductReviewRow;