import React from "react";
import { expressShippingPrice, taxRate } from "../../../constants";
import { calculateCartTotal, roundToDecimalPlaces } from "../../../utility";
import "./PriceBreakdown.css";

class PriceBreakdown extends React.Component {
    render() {
        const { 
            cart,
            products,
            shippingMethod,
        } = this.props;
        const subtotal = roundToDecimalPlaces(calculateCartTotal(cart, products), 2);
        const tax = roundToDecimalPlaces(subtotal * taxRate, 2);
        const shipping = shippingMethod === "express" ? expressShippingPrice : 0;
        const rows = [
            {
                label: "Subtotal",
                value: subtotal,
                labelClass: "minor-text",
                valueClass: "",
            },
            {
                label: "Shipping",
                value: shipping,
                labelClass: "minor-text",
                valueClass: "",
            },
            {
                label: "Sales Tax",
                value: tax,
                labelClass: "minor-text",
                valueClass: "",
            },
            {
                label: "Total",
                value: subtotal + tax + shipping,
                labelClass: "",
                valueClass: "bold-text",
            },
        ]
        return (
            <div className="price-breakdown">
                {rows.map(row => (
                    <div key={row.label}>
                        <div className={row.labelClass}>{row.label}:</div>
                        <div className={row.valueClass}>${row.value.toFixed(2)}</div>
                    </div>))
                }
            </div>
        )
    }
}

export default PriceBreakdown;