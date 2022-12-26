import React from "react";
import { expressShippingPrice, taxRate } from "../../../constants";
import { calculateCartTotal } from "../../../utility";

class PriceBreakdown extends React.Component {
    render() {
        const { 
            cart,
            products,
            shippingMethod,
        } = this.props;
        const subtotal = calculateCartTotal(cart, products);
        const tax = subtotal * taxRate;
        const shipping = shippingMethod === "express" ? expressShippingPrice : 0;
        return (
            <div>
                <div>Subtotal: ${subtotal}</div>
                <div>Shipping: ${shipping}</div>
                <div>Sales Tax: ${subtotal * taxRate}</div>
                <div>Total: ${subtotal + tax + shipping}</div>
            </div>
        )
    }
}

export default PriceBreakdown;