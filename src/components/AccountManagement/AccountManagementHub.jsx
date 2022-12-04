import React from "react";
import CreateAccount from "./CreateAccount/CreateAccount";
import SignIn from "./SignIn/SignIn";

class AccountManagementHub extends React.Component {
    constructor() {
        super();
        this.state = { page: "createAccount" };
    }

    render() {
        const { page } = this.state;
        return (
            <div>
                {page === "signIn" && <SignIn />}
                {page === "createAccount" && <CreateAccount />}
            </div>
        )
    }
}

export default AccountManagementHub;