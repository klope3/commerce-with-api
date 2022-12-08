import React from "react";
import { PUBLIC_KEY } from "../constants";
import { fakeData } from "../fakeData";
import AccountManagementHub from "./AccountManagement/AccountManagementHub";
import BrowsingHub from "./Browsing/BrowsingHub/BrowsingHub";
import OrderStepHub from "./OrderSteps/OrderStepHub";

const useFakeData = false; //for development and testing only

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
            loading: false,
            errorMessage: undefined,
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

    async componentDidMount() {
        if (useFakeData) {
            this.setState(prevState => ({...prevState, products: fakeData}));
            return;
        }
        this.setState(prevState => ({...prevState, loading: true}));
        try {
            const response = await fetch("https://api.chec.io/v1/products?include=attributes&limit=100", {
                method: "get",
                headers: new Headers({
                    "X-Authorization": PUBLIC_KEY
                }),
            });
            if (response.ok) {
                const json = await response.json();
                this.setState(prevState => ({
                    ...prevState, 
                    loading: false,
                    products: json.data,
                }));
            } else {
                this.setState(prevState => ({
                    ...prevState,
                    errorMessage: `A ${response.status} error occurred.`,
                    loading: false,
                }));
            }
        } catch(error) {
            this.setState(prevState => ({
                ...prevState,
                errorMessage: "An error occurred. There might be a network issue.",
                loading: false,
            }));
        }
        // const json = await response.json();
        // this.setState(prevState => ({...prevState, loading: false}));
    }

    render() {
        const { 
            page, 
            createdAccounts, 
            activeAccountIndex, 
            cart,
            loading,
            errorMessage,
            products,
        } = this.state;
        const appStateInfo = { 
            activeAccount: activeAccountIndex !== undefined ? createdAccounts[activeAccountIndex] : undefined,
            cart,
            loading,
            errorMessage,
            products,
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
                {/* {loading && <div>Loading...</div>}
                {errorMessage && <div className="error-text">{errorMessage}</div>} */}
            </div>
        )
    }
}

export default AppHub;