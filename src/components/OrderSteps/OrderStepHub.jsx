import React from "react";
import Cart from "./Cart/Cart";
import ShippingInfo from "./ShippingInfo/ShippingInfo";
import PaymentInfo from "./PaymentInfo/PaymentInfo";
import OrderConfirmation from "./OrderConfirmation/OrderConfirmation";
import { formattingFunctions } from "../../formatters";

class OrderStepHub extends React.Component {
    constructor() {
        super();
        this.state = { 
            page: "cart",
            shippingInfo: {},
            paymentInfo: {},
        };
    }

    navigate = event => {
        this.setState(prevState => ({
            ...prevState,
            page: event.target.name,
        }));
    }

    handleFieldChange = event => {
        const { name: sender, value } = event.target;
        const infoObjKey = sender.startsWith("shipping") ? "shippingInfo" : "paymentInfo";
        const valToSet = formattingFunctions[sender] ? formattingFunctions[sender](value) : value;
        this.setState(prevState => ({
            ...prevState,
            [infoObjKey]: {
                ...prevState[infoObjKey],
                [sender]: valToSet,
            },
        }));
    }

    render() {
        const { 
            navigateFunction, 
            changeItemQuantityFunction,
            appStateInfo,
        } = this.props;
        const { 
            page,
            shippingInfo,
            paymentInfo,
        } = this.state;
        return (
            <div>
                <button name="browsing" onClick={navigateFunction}>Back To Home</button>
                {page === "cart" && <Cart appStateInfo={appStateInfo} navFunction={this.navigate} changeItemQuantityFunction={changeItemQuantityFunction} />}
                {page === "shipping" && 
                    <ShippingInfo 
                        fieldValues={shippingInfo} 
                        navFunction={this.navigate} 
                        fieldChangeFunction={this.handleFieldChange} 
                    />
                }
                {page === "payment" && 
                    <PaymentInfo 
                        fieldValues={paymentInfo} 
                        navFunction={this.navigate} 
                        fieldChangeFunction={this.handleFieldChange} 
                    />
                }
                {page === "confirm" && <OrderConfirmation />}
            </div>
        )
    }
}

export default OrderStepHub;