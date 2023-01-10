import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { formattingFunctions } from "../../../formatters";
import { validationFunctions } from "../../../validation";
import InputField from "../../Common/InputField/InputField";

class CreateAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldValues: {
                createAccountEmail: "",
                createAccountPassword: "",
                createAccountPasswordConfirm: "",
                createAccountFirstName: "",
                createAccountLastName: "",
            },
            passwordVisible: false,
            errors: {},
        };
        this.tryCreateAccount = props.createAccountFunction;
    }

    changeField = event => {
        const { name: sender, value } = event.target;
        const valToSet = formattingFunctions[sender] ? formattingFunctions[sender](value) : value;
        this.setState(prevState => ({
            ...prevState,
            fieldValues: {
                ...prevState.fieldValues,
                [sender]: valToSet,
            },
        }));
    }

    blurField = event => {
        const { name: sender, value } = event.target;
        const { 
            fieldValues: {
                createAccountPassword, 
                createAccountPasswordConfirm,
            }
        } = this.state;
        const shouldCheckPasswordsMatch = sender === "createAccountPassword" || sender === "createAccountPasswordConfirm";
        const doPasswordsMatch = createAccountPassword === createAccountPasswordConfirm;
        const newErrors = { ...this.state.errors };
        newErrors[sender] = validationFunctions[sender] ? validationFunctions[sender](value) : undefined;
        if (shouldCheckPasswordsMatch) {
            newErrors.createAccountPasswordConfirm = !doPasswordsMatch ? "The passwords must match." : undefined;
        }
        this.setState(prevState => ({
            ...prevState,
            errors: newErrors,
        }));
    }

    validateAllFields = () => {
        const newErrors = {};
        let errorFound = false;
        const { 
            fieldValues,
            fieldValues: {
                createAccountPassword, 
                createAccountPasswordConfirm,
            },
        } = this.state;
        const createAccountFields = Object.keys(fieldValues);
        createAccountFields.forEach(item => {
            let error = validationFunctions[item] ? validationFunctions[item](this.state.fieldValues[item]) : undefined;
            if (item === "createAccountPasswordConfirm" && createAccountPassword !== createAccountPasswordConfirm) {
                error = "The passwords must match.";
            }
            newErrors[item] = error;
            if (error) errorFound = true;
        });
        this.setState(prevState => ({
            ...prevState,
            errors: newErrors,
        }));
        return !errorFound;
    }

    clickCreateAccount = () => {
        if (!this.validateAllFields()) {
            this.setState(prevState => ({
                ...prevState,
                attemptMessage: undefined,
            }));
            return;
        }
        const { 
            fieldValues: {
                createAccountEmail, 
                createAccountPassword,
                createAccountFirstName,
                createAccountLastName,
            }
        } = this.state;
        const success = this.tryCreateAccount(createAccountEmail, createAccountPassword, createAccountFirstName, createAccountLastName);
        this.setState(prevState => ({
            ...prevState,
            attemptMessage: success ? "Account created successfully!" : "An account with that email already exists.",
        }));
    }

    togglePasswordVisibility = () => {
        this.setState(prevState => ({
            passwordVisible: !prevState.passwordVisible,
        }));
    }

    render() {
        const {
            fieldValues: {
                createAccountEmail,
                createAccountPassword,
                createAccountPasswordConfirm,
                createAccountFirstName,
                createAccountLastName,
            },
            errors: {
                createAccountEmail: emailError,
                createAccountPassword: passwordError,
                createAccountPasswordConfirm: passwordConfirmError,
                createAccountFirstName: firstNameError,
                createAccountLastName: lastNameError,
            },
            passwordVisible,
            attemptMessage,
        } = this.state;
        const fields = [
            {
                name: "createAccountEmail",
                labelText: "Email Address",
                value: createAccountEmail,
                errorText: emailError,
            },
            {
                name: "createAccountPassword",
                labelText: "Password",
                type: passwordVisible ? "text" : "password",
                value: createAccountPassword,
                errorText: passwordError,
                rowClass: "password-row",
                extraContent: <button className="password-visibility-button" onClick={this.togglePasswordVisibility}>
                    <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
                </button>
            },
            {
                name: "createAccountPasswordConfirm",
                labelText: "Confirm Password",
                type: passwordVisible ? "text" : "password",
                value: createAccountPasswordConfirm,
                errorText: passwordConfirmError,
                rowClass: "password-row",
            },
            {
                name: "createAccountFirstName",
                labelText: "First Name",
                value: createAccountFirstName,
                errorText: firstNameError,
            },
            {
                name: "createAccountLastName",
                labelText: "Last Name",
                value: createAccountLastName,
                errorText: lastNameError,
            },
        ];
        const success = attemptMessage && attemptMessage.toLowerCase().includes("success");
        return (
            <div>
                {fields.map(item => (
                    <InputField 
                        key={item.name} 
                        fieldData={item} 
                        blurFunction={this.blurField} 
                        changeFunction={this.changeField} 
                    />))
                }
                {attemptMessage && <div className={success ? "success-text" : "error-text"}>{attemptMessage}</div>}
                <button 
                    className="button-major" 
                    id="create-account-button" 
                    onClick={this.clickCreateAccount}>
                        Create Account
                </button>
            </div>
        )
    }
}

export default CreateAccount;