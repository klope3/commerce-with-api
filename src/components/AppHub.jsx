import React from "react";
import AccountManagementHub from "./AccountManagement/AccountManagementHub";
import BrowsingHub from "./Browsing/BrowsingHub/BrowsingHub";
import OrderStepHub from "./OrderSteps/OrderStepHub";

class AppHub extends React.Component {
    constructor() {
        super();
        this.state = { 
            page: "browsing",
            accounts: [],
            activeAccountIndex: undefined,
            cart: [],
        };
    };

    navigateApp = event => {
        this.setState(prevState => ({
            ...prevState,
            page: event.target.name,
        }));
    }

    render() {
        const { page } = this.state;
        return (
            <div>
                {page === "account" && <AccountManagementHub navigateFunction={this.navigateApp} />}
                {page === "browsing" && <BrowsingHub navigateFunction={this.navigateApp} />}
                {page === "order" && <OrderStepHub navigateFunction={this.navigateApp} />}
            </div>
        )
    }
}

export default AppHub;