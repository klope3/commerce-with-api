import React from "react";
import { fieldNames } from "../../../constants";
import { changeComponentField } from "../../../utility";
import InputField from "../../Common/InputField/InputField";

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    changeField = event => changeComponentField(this, event);

    render() {
        const {
            signInEmail,
            signInPassword,
        } = this.state;
        const fields = [
            {
                name: fieldNames.signInEmail,
                labelText: "Email Address",
                value: signInEmail,
            },
            {
                name: fieldNames.signInPassword,
                labelText: "Password",
                value: signInPassword,
            },
        ];
        return (
            <div>
                {fields.map(item => <InputField key={item.name} fieldData={item} changeFunction={this.changeField} />)}
                <button>Sign In</button>
            </div>
        )
    }
}

export default SignIn;