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
            sortingFunction: sortingFunctions[0].function,
            filters: {},
            searchString: "",
        }
    }

    changeSearchString = event => {
        this.setState(prevState => ({
            ...prevState,
            searchString: event.target.dataset.searchString,
        }));
    }

    changeSortingFunction = event => {
        this.setState(prevState => ({
            ...prevState,
            sortingFunction: sortingFunctions.find(item => item.name === event.target.value).function,
        }));
    }

    changeFilter = event => {
        const { name: sender, value, type, checked, dataset: { tag } } = event.target;
        const valToSet = type === "checkbox" ? checked : value;
        this.setState(prevState => ({
            ...prevState,
            filters: {
                ...prevState.filters,
                [tag]: {
                    ...prevState.filters[tag],
                    [sender]: prevState[sender] === true ? false : valToSet,
                },
            },
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
                productAttributes,
                productCategories,
            }
        } = this.props;
        const { sortingFunction, filters, searchString } = this.state;
        return (
            <>
                <Header appStateInfo={appStateInfo} signOutFunction={signOutFunction} navigateAppFunction={navigateAppFunction} navigateBrowsingFunction={navigateBrowsingFunction} />
                <SearchBar changeSortingFunction={this.changeSortingFunction} changeSearchFunction={this.changeSearchString} />
                <div className="filter-list-container">
                    <FilterBar productAttributes={productAttributes} productCategories={productCategories} changeFilterFunction={this.changeFilter} />
                    <ProductList loading={loading} errorMessage={errorMessage} products={products} sortingFunction={sortingFunction} filters={filters} searchString={searchString} />
                </div>
                <Footer />
            </>
        )
    }
}

export default BrowsingPage;