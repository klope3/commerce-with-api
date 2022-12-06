import React from "react";
import { fieldNames } from "../../../constants";
import { blurComponentField } from "../../../utility";
import { validationFunctions } from "../../../validation";
import InputField from "../../Common/InputField/InputField";

class ShippingInfo extends React.Component {
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
                shippingTitle,
                shippingAddress,
                shippingFullName,
                shippingCity,
                shippingCountry,
                shippingState,
                shippingZip,
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
        return (
            <div>
                {fields.map(item => <InputField key={item.name} fieldData={item} blurFunction={this.handleBlur} changeFunction={fieldChangeFunction} />)}
                <button name="cart" onClick={navFunction}>Back To Cart</button>
                <button name="payment" onClick={navFunction}>Go To Payment</button>
            </div>
        )
    }
}

export default ShippingInfo;