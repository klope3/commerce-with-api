import React from "react";
import { brandName } from "../../../constants";
import "./Header.css";

class Header extends React.Component {
    render() {
        const { 
            navigateAppFunction, 
            navigateBrowsingFunction,
            spreadContent,
            signOutFunction,
            appStateInfo: {
                activeAccount,
                cart,
            } ,
        } = this.props;
        const cartItemCount = Object.keys(cart).reduce((accum, cartKey) => cart[cartKey] > 0 ? accum + 1 : accum, 0);
        return (
            <header>
                <div className={`${spreadContent ? "" : "container-main"} header-flex`}>
                    <div>
                        <h1>{brandName}</h1>
                    </div>
                    <div>
                        <button name="order" onClick={navigateAppFunction}>{`Cart (${cartItemCount})`}</button>
                        <button name="main" onClick={navigateBrowsingFunction}>Back To Home</button>
                        {!activeAccount && <button name="account" className="button-major" onClick={navigateAppFunction}>Sign In</button>}
                        {activeAccount && <button onClick={signOutFunction}>Sign Out</button>}
                        <span className="account-greeting">Welcome, {activeAccount ? activeAccount.firstName : "Guest"}!</span>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;