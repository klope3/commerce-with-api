import React from "react";
import AccountManagementHub from "./AccountManagement/AccountManagementHub";
import BrowsingHub from "./Browsing/BrowsingHub/BrowsingHub";
import OrderStepHub from "./OrderSteps/OrderStepHub";

class AppHub extends React.Component {
    constructor() {
        super();
        this.state = { 
            page: "browsing",
            createdAccounts: [
                {
                    email: "person@example.com",
                    password: "password1",
                    firstName: "John",
                    lastName: "Doe",
                },
            ],
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

    tryCreateAccount = (email, password, firstName, lastName) => {
        const duplicate = this.state.createdAccounts.filter(item => item.email === email).length > 0;
        if (duplicate) return false;

        this.setState(prevState => ({
            ...prevState,
            createdAccounts: [
                ...prevState.createdAccounts,
                {
                    email: email,
                    password: password,
                    firstName: firstName,
                    lastName: lastName,
                },
            ],
        }));
        return true;
    }

    trySignIn = (email, password, failureCallback) => {
        const matchingIndex = this.state.createdAccounts.findIndex(item => item.email === email && item.password === password);
        if (matchingIndex === -1) {
            failureCallback();
            return;
        }
        this.setState(prevState => ({
            ...prevState,
            activeAccountIndex: matchingIndex,
            page: "browsing",
        }));
    }

    signOut = () => {
        this.setState(prevState => ({
            ...prevState,
            activeAccountIndex: undefined,
        }))
    }

    render() {
        const { 
            page, 
            createdAccounts, 
            activeAccountIndex, 
            cart,
        } = this.state;
        const appStateInfo = { 
            activeAccount: activeAccountIndex !== undefined ? createdAccounts[activeAccountIndex] : undefined,
            cart,
        };
        return (
            <div>
                {page === "account" && 
                    <AccountManagementHub 
                        navigateFunction={this.navigateApp} 
                        createAccountFunction={this.tryCreateAccount}
                        signInFunction={this.trySignIn} 
                    />
                }
                {page === "browsing" && 
                    <BrowsingHub 
                        appStateInfo={appStateInfo}
                        signOutFunction={this.signOut} 
                        navigateFunction={this.navigateApp} 
                    />
                }
                {page === "order" && 
                    <OrderStepHub 
                        appStateInfo={appStateInfo} 
                        navigateFunction={this.navigateApp} 
                    />
                }
            </div>
        )
    }
}

export default AppHub;