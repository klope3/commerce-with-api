import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import HomePortal from "../HomePortal/HomePortal";
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
                    <HomePortal navFunction={navigateBrowsingFunction} />
                    <div className="header-button-flex">
                        <button name="order" onClick={navigateAppFunction}>
                            {/* {`Cart (${cartItemCount})`} */}
                            <FontAwesomeIcon icon={faCartShopping} />
                            {` ${cartItemCount}`}
                        </button>
                        {!activeAccount && 
                            <button name="account" className="button-major" onClick={navigateAppFunction}>
                                Sign In
                            </button>
                        }
                        {activeAccount && <button onClick={signOutFunction}>Sign Out</button>}
                        <span className="account-greeting">
                            Welcome, {activeAccount ? activeAccount.firstName : "Guest"}!
                        </span>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;