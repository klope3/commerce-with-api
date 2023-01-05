import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { fieldNames } from "../../../constants";
import { blurComponentField, numberArray, validateAllComponentFieldValues } from "../../../utility";
import InputFieldGroup from "../InputFieldGroup/InputFieldGroup";
import PriceBreakdown from "../PriceBreakdown/PriceBreakdown";
import ProductReviewArea from "../ProductReviewArea/ProductReviewArea";

class PaymentInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
        };
        this.navFunction = props.navFunction;
    }

    handleBlur = event => blurComponentField(this, event);

    clickConfirmOrder = fieldValues => {
        if (validateAllComponentFieldValues(this, fieldValues)) {
            this.navFunction({ target: { name: "confirm" } });
        }
    }

    render() {
        const { 
            fieldValues,
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
        const fieldGroups = [
            {
                fields: [
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
                ],
            },
            {
                fields: [
                    {
                        name: fieldNames.paymentCardExpiryMonth,
                        labelText: "Expiry Month",
                        type: "select",
                        options: numberArray(1, 12),
                        value: paymentCardExpiryMonth,
                        errorText: expiryMonthError,
                    },
                    {
                        name: fieldNames.paymentCardExpiryYear,
                        labelText: "Expiry Year",
                        type: "select",
                        options: numberArray(2023, 2032),
                        value: paymentCardExpiryYear,
                        errorText: expiryYearError,
                    },
                ],
                groupClass: "small-field-flex",
            },
            {
                fields: [
                    {
                        name: fieldNames.paymentCardSecurityCode,
                        labelText: "CVV",
                        type: "number",
                        rowClass: "small-field",
                        min: "111",
                        value: paymentCardSecurityCode,
                        errorText: securityCodeError,
                    },
                ],
            },
        ];
        return (
            <div className="order-step-flex">
                <div>
                    <div className="order-step-heading">Payment</div>
                    <div className="order-step-icon"><FontAwesomeIcon icon={faCreditCard} /></div>
                </div>
                <div className="order-step-input-area">
                    {fieldGroups.map(group => (
                        <InputFieldGroup 
                            key={group.fields[0].labelText}
                            groupClass={group.groupClass} 
                            fields={group.fields}
                            blurFunction={this.handleBlur}
                            changeFunction={fieldChangeFunction} 
                        />)
                    )}
                </div>
                <div>
                    <ProductReviewArea appStateInfo={appStateInfo} />
                    <PriceBreakdown cart={cart} products={products} shippingMethod={shippingMethod} />
                    <button name="shipping" className="button-major" onClick={navFunction}>Back To Shipping</button>
                    <button name="confirm" className="button-major" onClick={() => this.clickConfirmOrder(fieldValues)}>Pay Now</button>
                </div>
            </div>
        )
    }
}

export default PaymentInfo;