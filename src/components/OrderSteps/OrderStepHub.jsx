import React from "react";
import Cart from "./Cart/Cart";
import ShippingInfo from "./ShippingInfo/ShippingInfo";
import PaymentInfo from "./PaymentInfo/PaymentInfo";
import OrderConfirmation from "./OrderConfirmation/OrderConfirmation";

class OrderStepHub extends React.Component {
    constructor() {
        super();
        this.state = { page: "confirm" };
    }
    render() {
        const { page } = this.state;
        return (
            <div>
                {page === "cart" && <Cart />}
                {page === "shipping" && <ShippingInfo />}
                {page === "payment" && <PaymentInfo />}
                {page === "confirm" && <OrderConfirmation />}
            </div>
        )
    }
}

export default OrderStepHub;