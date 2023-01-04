import React from "react";
import { brandName, countries, expressShippingPrice, fieldNames, shippingExpressDescription, shippingStandardDescription } from "../../../constants";
import { blurComponentField, validateAllComponentFieldValues } from "../../../utility";
import InputField from "../../Common/InputField/InputField";
import InputFieldGroup from "../InputFieldGroup/InputFieldGroup";
import PriceBreakdown from "../PriceBreakdown/PriceBreakdown";
import ProductReviewArea from "../ProductReviewArea/ProductReviewArea";
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
        const fields1 = [
        ];
        const fields2 = [
        ];
        const fields3 = [
        ];
        const fieldGroups = [
            {
                fields: [
                    {
                        name: fieldNames.shippingTitle,
                        labelText: "Address Title",
                        value: shippingTitle,
                        errorText: titleError,
                    },
                    {
                        name: fieldNames.shippingAddress,
                        labelText: "Address",
                        value: shippingAddress,
                        errorText: addressError,
                    },
                    {
                        name: fieldNames.shippingFullName,
                        labelText: "Full Name",
                        value: shippingFullName,
                        errorText: nameError,
                    },
                    {
                        name: fieldNames.shippingCity,
                        labelText: "City",
                        value: shippingCity,
                        errorText: cityError,
                    },
                ],
            },
            {
                fields: [
                    {
                        name: fieldNames.shippingState,
                        labelText: "State",
                        // rowClass: "small-field",
                        value: shippingState,
                        errorText: stateError,
                    },
                    {
                        name: fieldNames.shippingZip,
                        labelText: "Zip Code",
                        // rowClass: "small-field",
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
                        name: fieldNames.shippingCountry,
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
                title: "Standard",
                description: shippingStandardDescription,
                priceText: "FREE",
            },
            {
                id: "express",
                checked: shippingMethod === "express",
                title: "Express",
                description: shippingExpressDescription,
                priceText: `$${expressShippingPrice.toFixed(2)}`,
            },
        ]
        return (
            <div className="order-step-flex">
                <div>
                    <div className="order-step-heading">Shipping</div>
                </div>
                <div className="order-step-input-area">
                    {fieldGroups.map(group => (<InputFieldGroup 
                        groupClass={group.groupClass}
                        fields={group.fields} 
                        blurFunction={this.handleBlur} 
                        changeFunction={fieldChangeFunction} 
                    />))}
                    <div className="shipping-method-area">
                        <div className="bold-text">Shipping Method</div>
                        <div className="radio-group">
                            {radios.map(radio => (
                                <label key={radio.id} htmlFor={radio.id}>
                                    <input type="radio" name="shippingMethod" id={radio.id} checked={radio.checked} onChange={fieldChangeFunction} />
                                    <div className="radio-group-option-content shipping-option">
                                        <div>
                                            <div className="bold-text">{radio.title}</div>
                                            <div>{radio.description}</div>
                                        </div>
                                        <div className="bold-text">{radio.priceText}</div>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <ProductReviewArea appStateInfo={appStateInfo} />
                    <PriceBreakdown cart={cart} products={products} shippingMethod={shippingMethod} />
                    <button name="cart" className="button-major" onClick={navFunction}>Back To Cart</button>
                    <button name="payment" className="button-major" onClick={() => this.clickGoToPayment(fieldValues)}>Go To Payment</button>
                </div>
            </div>
        )
    }
}

export default ShippingInfo;