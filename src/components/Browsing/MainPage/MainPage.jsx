import React from "react";
import { mainPageHookText } from "../../../constants";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import SearchBar from "../SearchBar/SearchBar";

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
        return (
            <div>
                <Header />
                <h2>{mainPageHookText}</h2>
                <div>
                    <input type="text" name="searchInput" id="searchInput" />
                    <button>Go</button>
                </div>
                <Footer />
            </div>
        )
    }
}

export default MainPage;