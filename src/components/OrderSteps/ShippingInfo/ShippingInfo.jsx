import React from "react";
import { fieldNames } from "../../../constants";
import InputField from "../../Common/InputField/InputField";

class ShippingInfo extends React.Component {
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
        const fields = [
            {
                name: fieldNames.shippingTitle,
                labelText: "Address Title",
                value: shippingTitle,
            },
            {
                name: fieldNames.shippingAddress,
                labelText: "Address",
                value: shippingAddress,
            },
            {
                name: fieldNames.shippingFullName,
                labelText: "Full Name",
                value: shippingFullName,
            },
            {
                name: fieldNames.shippingCity,
                labelText: "City",
                value: shippingCity,
            },
            {
                name: fieldNames.shippingState,
                labelText: "State",
                value: shippingState,
            },
            {
                name: fieldNames.shippingCountry,
                labelText: "Country",
                value: shippingCountry,
            },
            {
                name: fieldNames.shippingZip,
                labelText: "Zip Code",
                value: shippingZip,
            },
        ];
        return (
            <div>
                {fields.map(item => <InputField key={item.name} fieldData={item} changeFunction={fieldChangeFunction} />)}
                <button name="cart" onClick={navFunction}>Back To Cart</button>
                <button name="payment" onClick={navFunction}>Go To Payment</button>
            </div>
        )
    }
}

export default ShippingInfo;