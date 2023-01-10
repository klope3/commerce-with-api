import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import InputField from "../../Common/InputField/InputField";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { passwordVisible: false };
        this.signInFunction = props.signInFunction;
    }

    changeField = event => {
        const { name: sender, value } = event.target;
        this.setState(prevState => ({
            ...prevState,
            [sender]: value,
        }));
    }

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
            passwordVisible,
        } = this.state;
        const fields = [
            {
                name: "signInEmail",
                labelText: "Email Address",
                value: signInEmail,
            },
            {
                name: "signInPassword",
                type: passwordVisible ? "text" : "password",
                labelText: "Password",
                value: signInPassword,
                rowClass: "password-row",
                extraContent: <button className="password-visibility-button" onClick={this.togglePasswordVisibility}>
                    <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
                </button>
            },
        ];
        return (
            <div>
                {fields.map(item => <InputField key={item.name} fieldData={item} changeFunction={this.changeField} />)}
                {failedAttempt && <div className="error-text">Invalid username or password.</div>}
                <button className="button-major" id="sign-in-button" onClick={this.clickSignIn}>Sign In</button>
            </div>
        )
    }
}

export default SignIn;