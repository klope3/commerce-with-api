import React from "react";
import { brandName } from "../../../constants";

class Header extends React.Component {
    render() {
        const { 
            navigateAppFunction, 
            navigateBrowsingFunction,
            signOutFunction,
            appStateInfo: {
                activeAccount,
                cart,
            } ,
        } = this.props;
        return (
            <header>
                <h1>{brandName}</h1>
                <button name="order" onClick={navigateAppFunction}>Cart</button>
                <button name="main" onClick={navigateBrowsingFunction}>Back To Home</button>
                {!activeAccount && <button name="account" onClick={navigateAppFunction}>Sign In</button>}
                {activeAccount && <button onClick={signOutFunction}>Sign Out</button>}
                <span>Welcome, {activeAccount ? activeAccount.firstName : "Guest"}!</span>
            </header>
        )
    }
}

export default Header;