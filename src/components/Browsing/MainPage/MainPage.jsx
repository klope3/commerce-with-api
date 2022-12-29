import React from "react";
import { mainPageGoButtonText, mainPageHookText } from "../../../constants";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import "./MainPage.css";

class MainPage extends React.Component {
    render() {
        const { 
            navigateAppFunction,
            navigateBrowsingFunction,
            signOutFunction,
            appStateInfo,
        } = this.props;
        return (
            <div className="main-page">
                <Header appStateInfo={appStateInfo} signOutFunction={signOutFunction} navigateAppFunction={navigateAppFunction} />
                <div className="main-bg"></div>
                <div className="container-hero">
                    <h2>{mainPageHookText}</h2>
                    <div>
                        <button name="browsing" className="button-major" onClick={navigateBrowsingFunction}>{mainPageGoButtonText}</button>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default MainPage;