import React from "react";
import InputField from "../../Common/InputField/InputField";

class ShippingInfo extends React.Component {
    render() {
        const fields = [
            {
                name: "shippingTitle",
                labelText: "Address Title",
            },
            {
                name: "shippingAddress",
                labelText: "Address",
            },
            {
                name: "shippingFirstName",
                labelText: "First Name",
            },
            {
                name: "shippingLastName",
                labelText: "Last Name",
            },
            {
                name: "shippingCity",
                labelText: "City",
            },
            {
                name: "shippingState",
                labelText: "State",
            },
        ]
        return (
            <div>
                {fields.map(item => <InputField key={item.name} fieldData={item} />)}
            </div>
        )
    }
}

export default ShippingInfo;