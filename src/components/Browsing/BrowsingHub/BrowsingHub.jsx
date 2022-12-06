import React from "react";
import BrowsingPage from "../BrowsingPage/BrowsingPage";
import MainPage from "../MainPage/MainPage";
import "./BrowsingHub.css";

class BrowsingHub extends React.Component {
    constructor() {
        super();
        this.state = {
            page: "main",
        };
    }

    navigateBrowsing = event => {
        this.setState(prevState => ({
            ...prevState,
            page: event.target.name,
        }));
    }
    
    render() {
        const { 
            navigateFunction,
            appStateInfo,
            signOutFunction,
        } = this.props;
        const { page } = this.state;
        return (
            <>
                {page === "main" && 
                    <MainPage 
                        appStateInfo={appStateInfo} 
                        signOutFunction={signOutFunction}
                        navigateAppFunction={navigateFunction} 
                        navigateBrowsingFunction={this.navigateBrowsing} 
                    />
                }
                {page === "browsing" && 
                    <BrowsingPage 
                        appStateInfo={appStateInfo} 
                        signOutFunction={signOutFunction}
                        navigateAppFunction={navigateFunction} 
                        navigateBrowsingFunction={this.navigateBrowsing} 
                    />
                }
            </>
        )
    }
}

export default BrowsingHub;