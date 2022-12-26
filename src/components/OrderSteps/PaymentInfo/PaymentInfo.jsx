import React from "react";
import { fieldNames } from "../../../constants";
import { blurComponentField } from "../../../utility";
import InputField from "../../Common/InputField/InputField";
import PriceBreakdown from "../PriceBreakdown/PriceBreakdown";
import ProductReviewArea from "../ProductReviewArea/ProductReviewArea";

class PaymentInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            errors: {},
        };
    }

    handleBlur = event => blurComponentField(this, event);

    render() {
        const { 
            fieldValues: {
                paymentCardholder,
                paymentCardNumber,
                paymentCardExpiryMonth,
                paymentCardExpiryYear,
                paymentCardSecurityCode,
            },
            appStateInfo,
            appStateInfo: {
                cart,
                products,
            },
            shippingMethod,
            navFunction,
            fieldChangeFunction,
        } = this.props;
        const {
            errors: {
                paymentCardholder: cardholderError,
                paymentCardNumber: cardNumberError,
                paymentCardExpiryMonth: expiryMonthError,
                paymentCardExpiryYear: expiryYearError,
                paymentCardSecurityCode: securityCodeError,
            }
        } = this.state;
        const fields = [
            {
                name: fieldNames.paymentCardholder,
                labelText: "Cardholder",
                value: paymentCardholder,
                errorText: cardholderError,
            },
            {
                name: fieldNames.paymentCardNumber,
                labelText: "Card Number",
                value: paymentCardNumber,
                errorText: cardNumberError,
            },
            {
                name: fieldNames.paymentCardExpiryMonth,
                labelText: "Expiry Month",
                value: paymentCardExpiryMonth,
                errorText: expiryMonthError,
            },
            {
                name: fieldNames.paymentCardExpiryYear,
                labelText: "Expiry Year",
                value: paymentCardExpiryYear,
                errorText: expiryYearError,
            },
            {
                name: fieldNames.paymentCardSecurityCode,
                labelText: "CVV",
                value: paymentCardSecurityCode,
                errorText: securityCodeError,
            },
        ];
        return (
            <div>
                {fields.map(item => <InputField key={item.name} fieldData={item} blurFunction={this.handleBlur} changeFunction={fieldChangeFunction} />)}
                <ProductReviewArea appStateInfo={appStateInfo} />
                <PriceBreakdown cart={cart} products={products} shippingMethod={shippingMethod} />
                <button name="shipping" onClick={navFunction}>Back To Shipping</button>
                <button name="confirm" onClick={navFunction}>Pay Now</button>
            </div>
        )
    }
}

export default PaymentInfo;