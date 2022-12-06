import React from "react";
import { fieldNames } from "../../../constants";
import { changeComponentField } from "../../../utility";
import InputField from "../../Common/InputField/InputField";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.signInFunction = props.signInFunction;
    }

    changeField = event => changeComponentField(this, event);

    clickSignIn = () => this.signInFunction(this.state.signInEmail, this.state.signInPassword, this.signInFailure);

    signInFailure = () => {
        this.setState(prevState => ({
            ...prevState,
            failedAttempt: true,
        }));
    }

    render() {
        const {
            signInEmail,
            signInPassword,
            failedAttempt,
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
                {failedAttempt && <div className="error-text">Invalid username or password.</div>}
                <button onClick={this.clickSignIn}>Sign In</button>
            </div>
        )
    }
}

export default SignIn;