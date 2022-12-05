import React from "react";
import { fieldNames } from "../../../constants";
import InputField from "../../Common/InputField/InputField";

class PaymentInfo extends React.Component {
    render() {
        const { 
            fieldValues: {
                paymentCardholder,
                paymentCardNumber,
                paymentCardExpiryMonth,
                paymentCardExpiryYear,
                paymentCardSecurityCode,
            },
            navFunction,
            fieldChangeFunction,
        } = this.props;
        const fields = [
            {
                name: fieldNames.paymentCardholder,
                labelText: "Cardholder",
                value: paymentCardholder,
            },
            {
                name: fieldNames.paymentCardNumber,
                labelText: "Card Number",
                value: paymentCardNumber,
            },
            {
                name: fieldNames.paymentCardExpiryMonth,
                labelText: "Expiry Month",
                value: paymentCardExpiryMonth,
            },
            {
                name: fieldNames.paymentCardExpiryYear,
                labelText: "Expiry Year",
                value: paymentCardExpiryYear,
            },
            {
                name: fieldNames.paymentCardSecurityCode,
                labelText: "CVV",
                value: paymentCardSecurityCode,
            },
        ]
        return (
            <div>
                {fields.map(item => <InputField key={item.name} fieldData={item} changeFunction={fieldChangeFunction} />)}
                <button name="shipping" onClick={navFunction}>Back To Shipping</button>
                <button name="confirm" onClick={navFunction}>Pay Now</button>
            </div>
        )
    }
}

export default PaymentInfo;