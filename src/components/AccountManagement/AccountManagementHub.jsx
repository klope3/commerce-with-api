import React from "react";
import CreateAccount from "./CreateAccount/CreateAccount";
import SignIn from "./SignIn/SignIn";

class AccountManagementHub extends React.Component {
    constructor() {
        super();
        this.state = { page: "signIn" };
    }

    handleRadio = event => {
        this.setState(prevState => ({
            ...prevState,
            page: event.target.value,
        }));
    }

    radioOption = (text, value, checked) => {
        return (
            <label>
                <input type="radio" name="pageSelect" id="signIn" value={value} onChange={this.handleRadio} checked={checked} />
                {text}
            </label>
        )
    }

    render() {
        const { navigateFunction, createAccountFunction, signInFunction } = this.props;
        const { page } = this.state;
        return (
            <div>
                <button onClick={navigateFunction} name="browsing">{"< Home"}</button>
                <div>
                    {this.radioOption("Sign In", "signIn", page === "signIn")}
                    {this.radioOption("Create Account", "createAccount", page === "createAccount")}
                </div>
                {page === "signIn" && <SignIn signInFunction={signInFunction} />}
                {page === "createAccount" && <CreateAccount createAccountFunction={createAccountFunction} />}
            </div>
        )
    }
}

export default AccountManagementHub;