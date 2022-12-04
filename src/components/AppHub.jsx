import React from "react";
import AccountManagementHub from "./AccountManagement/AccountManagementHub";
import BrowsingPage from "./Browsing/BrowsingPage/BrowsingPage";
import MainPage from "./Browsing/MainPage/MainPage";
import OrderStepHub from "./OrderSteps/OrderStepHub";

class AppHub extends React.Component {
    constructor() {
        super();
        this.state = { page: "order" }
    };

    render() {
        const { page } = this.state;
        return (
            <div>
                {page === "main" && <MainPage />}
                {page === "account" && <AccountManagementHub />}
                {page === "browsing" && <BrowsingPage />}
                {page === "order" && <OrderStepHub />}
            </div>
        )
    }
}

export default AppHub;