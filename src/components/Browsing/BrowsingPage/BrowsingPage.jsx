import React from "react";
import "./BrowsingPage.css";
import FilterBar from "../FilterBar/FilterBar";
import { fakeProducts } from "../../../fakeProducts";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import ProductList from "../ProductList/ProductList";
import SearchBar from "../SearchBar/SearchBar";

class BrowsingPage extends React.Component {
    render() {
        const { navigateAppFunction, navigateBrowsingFunction } = this.props;
        return (
            <>
                <Header navigateAppFunction={navigateAppFunction} navigateBrowsingFunction={navigateBrowsingFunction} />
                <SearchBar />
                <div className="filter-list-container">
                    <FilterBar />
                    <ProductList products={fakeProducts} />
                </div>
                <Footer />
            </>
        )
    }
}

export default BrowsingPage;