import React from "react";
import "./BrowsingPage.css";
import FilterBar from "../FilterBar/FilterBar";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import ProductList from "../ProductList/ProductList";
import SearchBar from "../SearchBar/SearchBar";
import { sortingFunctions } from "../../../productSorting";

class BrowsingPage extends React.Component {
    constructor() {
        super();
        this.state = {
            sortingFunction: sortingFunctions.alphaAscending,
        }
    }

    changeSortingFunction = event => {
        this.setState(prevState => ({
            ...prevState,
            sortingFunction: sortingFunctions[event.target.value],
        }));
    }

    render() {
        const { 
            navigateAppFunction, 
            navigateBrowsingFunction,
            signOutFunction,
            appStateInfo,
            appStateInfo: {
                products,
                loading,
                errorMessage,
            }
        } = this.props;
        const { sortingFunction } = this.state;
        return (
            <>
                <Header appStateInfo={appStateInfo} signOutFunction={signOutFunction} navigateAppFunction={navigateAppFunction} navigateBrowsingFunction={navigateBrowsingFunction} />
                <SearchBar changeSortingFunction={this.changeSortingFunction} />
                <div className="filter-list-container">
                    <FilterBar />
                    <ProductList loading={loading} errorMessage={errorMessage} products={products} sortingFunction={sortingFunction} />
                </div>
                <Footer />
            </>
        )
    }
}

export default BrowsingPage;