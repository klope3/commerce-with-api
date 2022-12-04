import React from "react";
import InputField from "../../Common/InputField/InputField";

class PaymentInfo extends React.Component {
    render() {
        const fields = [
            {
                name: "paymentCardholder",
                labelText: "Cardholder",
            },
            {
                name: "paymentCardNumber",
                labelText: "Card Number",
            },
            {
                name: "paymentExpiration",
                labelText: "Expiration",
            },
            {
                name: "paymentSecurityCode",
                labelText: "CVV",
            },
        ]
        return (
            <div>
                {fields.map(item => <InputField key={item.name} fieldData={item} />)}
            </div>
        )
    }
}

export default PaymentInfo;