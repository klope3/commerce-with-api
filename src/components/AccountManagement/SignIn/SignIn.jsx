import React from "react";
import InputField from "../../Common/InputField/InputField";

class SignIn extends React.Component {
    render() {
        const fields = [
            {
                name: "signInEmail",
                labelText: "Email Address",
            },
            {
                name: "signInPassword",
                labelText: "Password",
            },
        ];
        return (
            <div>
                {fields.map(item => <InputField key={item.name} fieldData={item} />)}
                <button>Sign In</button>
            </div>
        )
    }
}

export default SignIn;