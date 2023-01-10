import React from "react";
import { PUBLIC_KEY, SECRET_KEY } from "../constants";
import { fakeAttributes, fakeCategories, fakeData } from "../fakeData";
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
            cart: {},
            loading: false,
            errorMessage: undefined,
            productAttributes: [],
            productCategories: [],
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

    tryFetchFromStore = async(url, key, callbackOk, callbackNotOk, callbackWithError) => {
        try {
            const response = await fetch(url, {
                method: "get",
                headers: new Headers({
                    "X-Authorization": key
                }),
            });
            if (response.ok) {
                const json = await response.json();
                callbackOk(json);
            } else {
                callbackNotOk(response);
            }
        } catch(error) {
            callbackWithError(error);
        }
    }

    tryFetchProducts = async() => {
        this.tryFetchFromStore(
            "https://api.chec.io/v1/products?include=attributes&limit=100",
            PUBLIC_KEY,
            json => {
                this.setState(prevState => ({
                    ...prevState,
                    loading: false,
                    products: json.data,
                }));
            },
            response => {
                this.setState(prevState => ({
                    ...prevState,
                    errorMessage: `A ${response.status} error occurred.`,
                    loading: false,
                }));
            },
            error => {
                this.setState(prevState => ({
                    ...prevState,
                    errorMessage: "An error occurred. There might be a network issue.",
                    loading: false,
                }));
            }
        );
    }

    tryFetchCategories = async() => {
        this.tryFetchFromStore(
            "https://api.chec.io/v1/categories",
            SECRET_KEY,
            json => {
                this.setState(prevState => ({
                    ...prevState,
                    productCategories: json,
                }));
            },
            response => {},
            error => {}
        );
    }

    tryFetchAttributes = async() => {
        this.tryFetchFromStore(
            "https://api.chec.io/v1/attributes",
            SECRET_KEY,
            json => {
                this.setState(prevState => ({
                    ...prevState,
                    productAttributes: json,
                }));
            },
            response => {},
            error => {},
        );
    }

    changeCartItemQuantity = event => {
        const {
            dataset: { productName },
            name: sender,
            value,
        } = event.target;
        let valToSet = value;
        if (sender === "addToCartButton") valToSet = 1;
        if (sender === "removeFromCartButton") valToSet = 0;
        this.setState(prevState => ({
            ...prevState,
            cart: {
                ...prevState.cart,
                [productName]: valToSet,
            },
        }));
    }

    async componentDidMount() {
        if (useFakeData) {
            this.setState(prevState => ({
                ...prevState, 
                products: fakeData,
                productAttributes: fakeAttributes,
                productCategories: fakeCategories,
            }));
            return;
        }
        this.setState(prevState => ({...prevState, loading: true}));
        this.tryFetchProducts();
        this.tryFetchAttributes();
        this.tryFetchCategories();
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
            productAttributes,
            productCategories,
        } = this.state;
        const appStateInfo = { 
            activeAccount: activeAccountIndex !== undefined ? createdAccounts[activeAccountIndex] : undefined,
            cart,
            loading,
            errorMessage,
            products,
            productAttributes,
            productCategories,
        };
        return (
            <>
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
                        changeItemQuantityFunction={this.changeCartItemQuantity} 
                    />
                }
                {page === "order" && 
                    <OrderStepHub 
                        appStateInfo={appStateInfo} 
                        navigateFunction={this.navigateApp}
                        changeItemQuantityFunction={this.changeCartItemQuantity} 
                    />
                }
                {/* {loading && <div>Loading...</div>}
                {errorMessage && <div className="error-text">{errorMessage}</div>} */}
            </>
        )
    }
}

export default AppHub;