import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PriceBreakdown from "../PriceBreakdown/PriceBreakdown";
import ProductReviewArea from "../ProductReviewArea/ProductReviewArea";
import "./OrderConfirmation.css";

class OrderConfirmation extends React.Component {
    render() {
        const {
            appStateInfo,
            appStateInfo: {
                cart,
                products,
            },
            shippingMethod,
        } = this.props;
        return (
            <div className="order-confirmation-flex">
                <div className="order-confirmation-main">
                    <div><FontAwesomeIcon icon={faCheckCircle} className="order-confirmation-check" /></div>
                    <div>Your Order is Confirmed</div>
                    <button className="button-major track-button">Track Order</button>
                </div>
                <div>
                    <ProductReviewArea appStateInfo={appStateInfo} />
                    <PriceBreakdown cart={cart} products={products} shippingMethod={shippingMethod} />
                </div>
            </div>
        )
    }
}

export default OrderConfirmation;