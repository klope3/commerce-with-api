import React from "react";
import { brandName } from "../../../constants";

class Header extends React.Component {
    render() {
        const { navigateAppFunction, navigateBrowsingFunction } = this.props;
        return (
            <header>
                <h1>{brandName}</h1>
                <button name="order" onClick={navigateAppFunction}>Cart</button>
                <button name="main" onClick={navigateBrowsingFunction}>Back To Home</button>
                <button name="account" onClick={navigateAppFunction}>Sign In</button>
            </header>
        )
    }
}

export default Header;