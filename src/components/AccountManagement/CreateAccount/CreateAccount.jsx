import React from "react";
import { fieldNames } from "../../../constants"; //should probably stop using this
import { changeComponentField } from "../../../utility";
import { validationFunctions } from "../../../validation";
import InputField from "../../Common/InputField/InputField";

class CreateAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
        };
        this.tryCreateAccount = props.createAccountFunction;
    }

    changeField = event => changeComponentField(this, event);

    blurField = event => {
        const { name: sender, value } = event.target;
        const { createAccountPassword, createAccountPasswordConfirm } = this.state;
        const shouldCheckPasswordsMatch = sender === fieldNames.createAccountPassword || sender == fieldNames.createAccountPasswordConfirm;
        const doPasswordsMatch = createAccountPassword === createAccountPasswordConfirm;
        this.setState(prevState => ({
            ...prevState,
            errors: {
                ...prevState.errors,
                [sender]: validationFunctions[sender] ? validationFunctions[sender](value) : undefined,
                createAccountPasswordConfirm: shouldCheckPasswordsMatch && !doPasswordsMatch ? "The passwords must match." : undefined,
            },
        }));
    }

    validateAllFields = () => {
        const newErrors = {};
        let errorFound = false;
        const createAccountFields = Object.keys(fieldNames).filter(item => item.startsWith("createAccount"));
        const { createAccountPassword, createAccountPasswordConfirm } = this.state;
        createAccountFields.forEach(item => {
            let error = validationFunctions[item] ? validationFunctions[item](this.state[item]) : undefined;
            if (item === fieldNames.createAccountPasswordConfirm && createAccountPassword !== createAccountPasswordConfirm) {
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
            createAccountEmail, 
            createAccountPassword,
            createAccountFirstName,
            createAccountLastName,
        } = this.state;
        const success = this.tryCreateAccount(createAccountEmail, createAccountPassword, createAccountFirstName, createAccountLastName);
        this.setState(prevState => ({
            ...prevState,
            attemptMessage: success ? "Account created successfully!" : "An account with that email already exists.",
        }));
    }

    render() {
        const {
            createAccountEmail,
            createAccountPassword,
            createAccountPasswordConfirm,
            createAccountFirstName,
            createAccountLastName,
            errors: {
                createAccountEmail: emailError,
                createAccountPassword: passwordError,
                createAccountPasswordConfirm: passwordConfirmError,
                createAccountFirstName: firstNameError,
                createAccountLastName: lastNameError,
            },
            attemptMessage,
        } = this.state;
        const fields = [
            {
                name: fieldNames.createAccountEmail,
                labelText: "Email Address",
                value: createAccountEmail,
                errorText: emailError,
            },
            {
                name: fieldNames.createAccountPassword,
                labelText: "Password",
                value: createAccountPassword,
                errorText: passwordError,
            },
            {
                name: fieldNames.createAccountPasswordConfirm,
                labelText: "Confirm Password",
                value: createAccountPasswordConfirm,
                errorText: passwordConfirmError,
            },
            {
                name: fieldNames.createAccountFirstName,
                labelText: "First Name",
                value: createAccountFirstName,
                errorText: firstNameError,
            },
            {
                name: fieldNames.createAccountLastName,
                labelText: "Last Name",
                value: createAccountLastName,
                errorText: lastNameError,
            },
        ];
        return (
            <div>
                {fields.map(item => <InputField key={item.name} fieldData={item} blurFunction={this.blurField} changeFunction={this.changeField} />)}
                {attemptMessage && <div className="error-text">{attemptMessage}</div>}
                <button className="button-major" onClick={this.clickCreateAccount}>Create Account</button>
            </div>
        )
    }
}

export default CreateAccount;