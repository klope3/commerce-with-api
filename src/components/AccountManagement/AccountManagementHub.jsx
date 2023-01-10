import React from "react";
import CreateAccount from "./CreateAccount/CreateAccount";
import SignIn from "./SignIn/SignIn";
import "./AccountManagementHub.css";
import { brandName } from "../../constants";
import RadioGroup from "../Common/RadioGroup/RadioGroup";

class AccountManagementHub extends React.Component {
    constructor() {
        super();
        this.state = { page: "signIn" };
    }

    handleRadio = event => {
        this.setState(prevState => ({
            ...prevState,
            page: event.target.id,
        }));
    }

    render() {
        const { navigateFunction, createAccountFunction, signInFunction } = this.props;
        const { page } = this.state;
        const radios = [
            {
                id: "signIn",
                checked: page === "signIn",
                content: "Sign In",
            },
            {
                id: "createAccount",
                checked: page === "createAccount",
                content: "Create Account",
            },
        ]
        return (
            <div className="account-hub">
                <div className="account-hub-center">
                    <div className="logo">{brandName}</div>
                    <div className="account-input-area">
                        <button onClick={navigateFunction} name="browsing">{"< Home"}</button>
                        <RadioGroup groupName="pageSelect" id="account-page-select" radios={radios} fieldChangeFunction={this.handleRadio} />
                        {page === "signIn" && <SignIn signInFunction={signInFunction} />}
                        {page === "createAccount" && <CreateAccount createAccountFunction={createAccountFunction} />}
                    </div>
                </div>
            </div>
        )
    }
}

export default AccountManagementHub;