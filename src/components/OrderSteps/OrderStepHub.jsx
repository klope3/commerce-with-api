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
            shippingInfo: {
                shippingTitle: "",
                shippingAddress: "",
                shippingFullName: "",
                shippingCity: "",
                shippingCountry: "",
                shippingState: "",
                shippingZip: "",
                shippingMethod: "express",
            },
            paymentInfo: {
                paymentCardholder: "",
                paymentCardNumber: "",
                paymentCardExpiryMonth: "",
                paymentCardExpiryYear: "",
                paymentCardSecurityCode: "",
            },
        };
    }

    navigate = event => {
        this.setState(prevState => ({
            ...prevState,
            page: event.target.name,
        }));
    }

    handleFieldChange = event => {
        const { name: sender, value, type, id } = event.target;
        const infoObjKey = sender.startsWith("shipping") ? "shippingInfo" : "paymentInfo";
        let valToSet = formattingFunctions[sender] ? formattingFunctions[sender](value) : value;
        if (type === "radio") valToSet = id;
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
            shippingInfo: { shippingMethod },
            paymentInfo,
        } = this.state;
        return (
            <>
                <button name="browsing" onClick={navigateFunction}>Back To Home</button>
                {page === "cart" && 
                    <Cart 
                        appStateInfo={appStateInfo} 
                        shippingMethod={shippingMethod}
                        navFunction={this.navigate} 
                        changeItemQuantityFunction={changeItemQuantityFunction} 
                    />
                }
                {page === "shipping" && 
                    <ShippingInfo 
                        fieldValues={shippingInfo} 
                        appStateInfo={appStateInfo}
                        navFunction={this.navigate} 
                        fieldChangeFunction={this.handleFieldChange} 
                    />
                }
                {page === "payment" && 
                    <PaymentInfo 
                        fieldValues={paymentInfo} 
                        appStateInfo={appStateInfo}
                        shippingMethod={shippingMethod}
                        navFunction={this.navigate} 
                        fieldChangeFunction={this.handleFieldChange} 
                    />
                }
                {page === "confirm" && 
                    <OrderConfirmation 
                        appStateInfo={appStateInfo}
                        shippingMethod={shippingMethod}
                    />
                }
            </>
        )
    }
}

export default OrderStepHub;