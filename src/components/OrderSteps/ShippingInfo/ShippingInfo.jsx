import React from "react";
import { fieldNames } from "../../../constants";
import { blurComponentField, validateAllComponentFieldValues } from "../../../utility";
import InputField from "../../Common/InputField/InputField";
import PriceBreakdown from "../PriceBreakdown/PriceBreakdown";
import ProductReviewArea from "../ProductReviewArea/ProductReviewArea";

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
        const fields = [
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
            {
                name: fieldNames.shippingState,
                labelText: "State",
                value: shippingState,
                errorText: stateError,
            },
            {
                name: fieldNames.shippingCountry,
                labelText: "Country",
                value: shippingCountry,
                errorText: countryError,
            },
            {
                name: fieldNames.shippingZip,
                labelText: "Zip Code",
                value: shippingZip,
                errorText: zipError,
            },
        ];
        const radios = [
            {
                id: "standard",
                checked: shippingMethod === "standard",
                text: "Standard"
            },
            {
                id: "express",
                checked: shippingMethod === "express",
                text: "Express"
            },
        ]
        return (
            <div>
                {fields.map(item => <InputField key={item.name} fieldData={item} blurFunction={this.handleBlur} changeFunction={fieldChangeFunction} />)}
                <div>
                    {radios.map(radio => (
                        <label key={radio.id} htmlFor={radio.id}>
                            <input type="radio" name="shippingMethod" id={radio.id} checked={radio.checked} onChange={fieldChangeFunction} />
                            {radio.text}
                        </label>
                    ))}
                </div>
                <ProductReviewArea appStateInfo={appStateInfo} />
                <PriceBreakdown cart={cart} products={products} shippingMethod={shippingMethod} />
                <button name="cart" onClick={navFunction}>Back To Cart</button>
                <button name="payment" onClick={() => this.clickGoToPayment(fieldValues)}>Go To Payment</button>
            </div>
        )
    }
}

export default ShippingInfo;