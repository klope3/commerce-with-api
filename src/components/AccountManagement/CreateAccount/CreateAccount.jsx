import React from "react";
import { fieldNames } from "../../../constants";
import { changeComponentField } from "../../../utility";
import InputField from "../../Common/InputField/InputField";

class CreateAccount extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    changeField = event => changeComponentField(this, event);

    render() {
        const {
            createAccountEmail,
            createAccountPassword,
            createAccountPasswordConfirm,
            createAccountFirstName,
            createAccountLastName,
        } = this.state;
        const fields = [
            {
                name: fieldNames.createAccountEmail,
                labelText: "Email Address",
                value: createAccountEmail,
            },
            {
                name: fieldNames.createAccountPassword,
                labelText: "Password",
                value: createAccountPassword,
            },
            {
                name: fieldNames.createAccountPasswordConfirm,
                labelText: "Confirm Password",
                value: createAccountPasswordConfirm,
            },
            {
                name: fieldNames.createAccountFirstName,
                labelText: "First Name",
                value: createAccountFirstName,
            },
            {
                name: fieldNames.createAccountLastName,
                labelText: "Last Name",
                value: createAccountLastName,
            },
        ];
        return (
            <div>
                {fields.map(item => <InputField key={item.name} fieldData={item} changeFunction={this.changeField} />)}
                <button>Create Account</button>
            </div>
        )
    }
}

export default CreateAccount;