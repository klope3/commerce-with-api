import { faArrowLeft, faArrowRight, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { countries, expressShippingPrice, shippingExpressDescription, shippingStandardDescription } from "../../../constants";
import { blurComponentField, validateAllComponentFieldValues } from "../../../utility";
import RadioGroup from "../../Common/RadioGroup/RadioGroup";
import InputFieldGroup from "../InputFieldGroup/InputFieldGroup";
import PriceBreakdown from "../PriceBreakdown/PriceBreakdown";
import ProductReviewArea from "../ProductReviewArea/ProductReviewArea";
import ShippingMethodRadioContent from "../ShippingMethodRadioContent/ShippingMethodRadioContent";
import "./ShippingInfo.css";

class ShippingInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
        };
        this.navFunction = props.navFunction;
    }

    handleBlur = event => blurComponentField(this, event);

    clickGoToPayment = fieldValues => {
        if (validateAllComponentFieldValues(this, fieldValues)) {
            this.navFunction({ target: { name: "payment" } });
        }
    }

    render() {
        const { 
            fieldValues,
            fieldValues: {
                shippingTitle,
                shippingAddress,
                shippingFullName,
                shippingCity,
                shippingCountry,
                shippingState,
                shippingZip,
                shippingMethod,
            },
            appStateInfo,
            appStateInfo: {
                cart,
                products,
            },
            navFunction,
            fieldChangeFunction,
        } = this.props;
        const {
            errors: {
                shippingTitle: titleError,
                shippingAddress: addressError,
                shippingFullName: nameError,
                shippingCity: cityError,
                shippingState: stateError,
                shippingCountry: countryError,
                shippingZip: zipError,
            }
        } = this.state;
        const fieldGroups = [
            {
                fields: [
                    {
                        name: "shippingTitle",
                        labelText: "Address Title",
                        value: shippingTitle,
                        errorText: titleError,
                    },
                    {
                        name: "shippingAddress",
                        labelText: "Address",
                        value: shippingAddress,
                        errorText: addressError,
                    },
                    {
                        name: "shippingFullName",
                        labelText: "Full Name",
                        value: shippingFullName,
                        errorText: nameError,
                    },
                    {
                        name: "shippingCity",
                        labelText: "City",
                        value: shippingCity,
                        errorText: cityError,
                    },
                ],
            },
            {
                fields: [
                    {
                        name: "shippingState",
                        labelText: "State",
                        value: shippingState,
                        errorText: stateError,
                    },
                    {
                        name: "shippingZip",
                        labelText: "Zip Code",
                        type: "number",
                        min: "0",
                        value: shippingZip,
                        errorText: zipError,
                    },
                ],
                groupClass: "small-field-flex",
            },
            {
                fields: [
                    {
                        name: "shippingCountry",
                        labelText: "Country",
                        type: "select",
                        options: countries,
                        value: shippingCountry,
                        errorText: countryError,
                    },
                ],
            },
        ];
        const radios = [
            {
                id: "standard",
                checked: shippingMethod === "standard",
                contentContainerClass: "shipping-option",
                content: <ShippingMethodRadioContent 
                    title="Standard" 
                    description={shippingStandardDescription} 
                    priceText="FREE"
                />,
            },
            {
                id: "express",
                checked: shippingMethod === "express",
                contentContainerClass: "shipping-option",
                content: <ShippingMethodRadioContent 
                    title="Express" 
                    description={shippingExpressDescription} 
                    priceText={`$${expressShippingPrice.toFixed(2)}`}
                />,
            },
        ]
        return (
            <div className="order-step-flex">
                <div>
                    <div className="order-step-heading">Shipping</div>
                    <div className="order-step-icon"><FontAwesomeIcon icon={faTruck} /></div>
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
                    <div className="shipping-method-area">
                        <div className="bold-text">Shipping Method</div>
                        <RadioGroup
                            radios={radios}
                            groupName="shippingMethod"
                            fieldChangeFunction={fieldChangeFunction}
                        />
                    </div>
                    <div>
                        <button name="cart" className="button-major" id="back-to-cart" onClick={navFunction}>
                            <FontAwesomeIcon icon={faArrowLeft} />  Back To Cart
                        </button>
                        <button 
                            name="payment" 
                            className="button-major button-big" 
                            id="go-to-payment" 
                            onClick={() => this.clickGoToPayment(fieldValues)}
                        >
                            Go To Payment  
                            <FontAwesomeIcon icon={faArrowRight} />
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

export default ShippingInfo;