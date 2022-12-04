import React from "react";
import InputField from "../../Common/InputField/InputField";

class CreateAccount extends React.Component {
    render() {
        const fields = [
            {
                name: "createAccountEmail",
                labelText: "Email Address",
            },
            {
                name: "createAccountPassword",
                labelText: "Password",
            },
            {
                name: "createAccountPasswordConfirm",
                labelText: "Confirm Password",
            },
            {
                name: "createAccountFirstName",
                labelText: "First Name",
            },
            {
                name: "createAccountLastName",
                labelText: "Last Name",
            },
        ];
        return (
            <div>
                {fields.map(item => <InputField key={item.name} fieldData={item} />)}
                <button>Create Account</button>
            </div>
        )
    }
}

export default CreateAccount;