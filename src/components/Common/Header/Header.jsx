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
        const cartItemCount = Object.keys(cart).reduce((accum, cartKey) => cart[cartKey] > 0 ? accum + 1 : accum, 0);
        return (
            <header>
                <h1>{brandName}</h1>
                <button name="order" onClick={navigateAppFunction}>{`Cart (${cartItemCount})`}</button>
                <button name="main" onClick={navigateBrowsingFunction}>Back To Home</button>
                {!activeAccount && <button name="account" onClick={navigateAppFunction}>Sign In</button>}
                {activeAccount && <button onClick={signOutFunction}>Sign Out</button>}
                <span>Welcome, {activeAccount ? activeAccount.firstName : "Guest"}!</span>
            </header>
        )
    }
}

export default Header;