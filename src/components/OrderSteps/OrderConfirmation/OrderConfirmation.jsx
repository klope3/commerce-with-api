import React from "react";
import PriceBreakdown from "../PriceBreakdown/PriceBreakdown";

class OrderConfirmation extends React.Component {
    render() {
        const {
            appStateInfo: {
                cart,
                products,
            },
            shippingMethod,
        } = this.props;
        return (
            <div>
                <div>Your Order is Confirmed</div>
                <PriceBreakdown cart={cart} products={products} shippingMethod={shippingMethod} />
            </div>
        )
    }
}

export default OrderConfirmation;