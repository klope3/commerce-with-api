import { faArrowLeft, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { creditCardLogos } from "../../../constants";
import { blurComponentField, getCardType, numberArray, validateAllComponentFieldValues } from "../../../utility";
import InputFieldGroup from "../InputFieldGroup/InputFieldGroup";
import PriceBreakdown from "../PriceBreakdown/PriceBreakdown";
import ProductReviewArea from "../ProductReviewArea/ProductReviewArea";
import "./PaymentInfo.css";

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
        const cardType = getCardType(paymentCardNumber);
        const cardLogo = cardType ? creditCardLogos[cardType] : undefined;
        const fieldGroups = [
            {
                fields: [
                    {
                        name: "paymentCardholder",
                        labelText: "Cardholder",
                        value: paymentCardholder,
                        errorText: cardholderError,
                    },
                    {
                        name: "paymentCardNumber",
                        labelText: "Card Number",
                        value: paymentCardNumber,
                        errorText: cardNumberError,
                        extraContent: <>{cardLogo && <img src={cardLogo} className="card-logo" />}</>
                    },
                ],
            },
            {
                fields: [
                    {
                        name: "paymentCardExpiryMonth",
                        labelText: "Expiry Month",
                        type: "select",
                        options: numberArray(1, 12),
                        value: paymentCardExpiryMonth,
                        errorText: expiryMonthError,
                    },
                    {
                        name: "paymentCardExpiryYear",
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
                        name: "paymentCardSecurityCode",
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
                    <div>
                        <button name="shipping" className="button-major" id="back-to-shipping" onClick={navFunction}>
                            <FontAwesomeIcon icon={faArrowLeft} />  Back To Shipping
                        </button>
                        <button 
                            name="confirm" 
                            className="button-major button-big" 
                            id="pay-now"
                            onClick={() => this.clickConfirmOrder(fieldValues)}>
                                Pay Now
                        </button>
                    </div>
                </div>
                <div>
                    <ProductReviewArea appStateInfo={appStateInfo} />
                    <PriceBreakdown cart={cart} products={products} shippingMethod={shippingMethod} />
                </div>
            </div>
        )
    }
}

export default PaymentInfo;