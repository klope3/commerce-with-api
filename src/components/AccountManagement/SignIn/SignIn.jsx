import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { fieldNames } from "../../../constants";
import { changeComponentField } from "../../../utility";
import InputField from "../../Common/InputField/InputField";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { passwordVisible: false };
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

    togglePasswordVisibility = () => {
        this.setState(prevState => ({
            passwordVisible: !prevState.passwordVisible,
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
                type: this.state.passwordVisible ? "text" : "password",
                labelText: "Password",
                value: signInPassword,
                rowClass: "password-row",
                extraContent: <button className="password-visibility-button" onClick={this.togglePasswordVisibility}>
                    <FontAwesomeIcon icon={this.state.passwordVisible ? faEye : faEyeSlash} />
                </button>
            },
        ];
        return (
            <div>
                {fields.map(item => <InputField key={item.name} fieldData={item} changeFunction={this.changeField} />)}
                {failedAttempt && <div className="error-text">Invalid username or password.</div>}
                <button className="button-major" onClick={this.clickSignIn}>Sign In</button>
            </div>
        )
    }
}

export default SignIn;