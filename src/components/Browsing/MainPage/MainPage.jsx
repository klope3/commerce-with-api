import React from "react";
import { mainPageGoButtonText, mainPageHookText } from "../../../constants";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";

class MainPage extends React.Component {
    render() {
        const { 
            navigateAppFunction,
            navigateBrowsingFunction,
            signOutFunction,
            appStateInfo,
        } = this.props;
        return (
            <div>
                <Header appStateInfo={appStateInfo} signOutFunction={signOutFunction} navigateAppFunction={navigateAppFunction} />
                <h2>{mainPageHookText}</h2>
                <div>
                    {/* <input type="text" name="searchInput" id="searchInput" /> */}
                    <button name="browsing" onClick={navigateBrowsingFunction}>{mainPageGoButtonText}</button>
                </div>
                <Footer />
            </div>
        )
    }
}

export default MainPage;