import React from "react";
import "./BrowsingPage.css";
import FilterBar from "../FilterBar/FilterBar";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import ProductList from "../ProductList/ProductList";
import SearchBar from "../SearchBar/SearchBar";
import { sortingFunctions } from "../../../productSorting";
import { productFilters } from "../../../productFilters";

class BrowsingPage extends React.Component {
    constructor() {
        super();
        this.state = {
            sortingFunction: sortingFunctions[0].function,
            filterFunctions: [
                productFilters[0].function,
            ],
        }
    }

    changeSortingFunction = event => {
        this.setState(prevState => ({
            ...prevState,
            sortingFunction: sortingFunctions.find(item => item.name === event.target.value).function,
        }));
    }

    changeFilterFunction = event => {
        console.log("change " + event.target.name + " to " + event.target.value);
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
        const { sortingFunction, filterFunctions } = this.state;
        return (
            <>
                <Header appStateInfo={appStateInfo} signOutFunction={signOutFunction} navigateAppFunction={navigateAppFunction} navigateBrowsingFunction={navigateBrowsingFunction} />
                <SearchBar changeSortingFunction={this.changeSortingFunction} />
                <div className="filter-list-container">
                    <FilterBar changeFilterFunction={this.changeFilterFunction} />
                    <ProductList loading={loading} errorMessage={errorMessage} products={products} sortingFunction={sortingFunction} filterFunctions={filterFunctions} />
                </div>
                <Footer />
            </>
        )
    }
}

export default BrowsingPage;