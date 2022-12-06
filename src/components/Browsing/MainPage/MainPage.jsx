import React from "react";
import { mainPageHookText } from "../../../constants";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";

class MainPage extends React.Component {
    async componentDidMount() {
        // const response = await fetch("https://api.chec.io/v1/products", {
        //     method: "get",
        //     headers: new Headers({
        //         "X-Authorization": "pk_4889887715be8d1a0534238f2e720b62a8f5a7a5500f3"
        //     }),
        // });
        // const json = await response.json();
        // console.log(json);
    }
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
                    <input type="text" name="searchInput" id="searchInput" />
                    <button name="browsing" onClick={navigateBrowsingFunction}>Go</button>
                </div>
                <Footer />
            </div>
        )
    }
}

export default MainPage;