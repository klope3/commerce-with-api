import React from "react";
import "./BrowsingPage.css";
import FilterBar from "../FilterBar/FilterBar";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import ProductList from "../ProductList/ProductList";
import SearchBar from "../SearchBar/SearchBar";
import { sortingFunctions } from "../../../productSorting";
import ProductModal from "../ProductModal/ProductModal";

class BrowsingPage extends React.Component {
    constructor() {
        super();
        this.state = {
            sortingFunction: sortingFunctions[0].function,
            filters: {},
            searchString: "",
            focusedProduct: undefined,
        }
    }

    setProductFocus = event => {
        this.setState(prevState => ({
            ...prevState,
            focusedProduct: event.target.dataset.productFocusName,
        }));
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
            changeItemQuantityFunction,
            appStateInfo,
            appStateInfo: {
                cart,
                products,
                loading,
                errorMessage,
                productAttributes,
                productCategories,
            }
        } = this.props;
        const { 
            sortingFunction, 
            filters, 
            searchString,
            focusedProduct,
        } = this.state;
        const focusedProductObj = products && products.find(product => product.name === focusedProduct);
        return (
            <div>
                <Header 
                    appStateInfo={appStateInfo} 
                    spreadContent={true} 
                    signOutFunction={signOutFunction} 
                    navigateAppFunction={navigateAppFunction} 
                    navigateBrowsingFunction={navigateBrowsingFunction} 
                />
                <SearchBar 
                    changeSortingFunction={this.changeSortingFunction} 
                    changeSearchFunction={this.changeSearchString} 
                />
                <div className="filter-list-container">
                    <FilterBar 
                        productAttributes={productAttributes} 
                        productCategories={productCategories} 
                        changeFilterFunction={this.changeFilter} 
                    />
                    <ProductList 
                        loading={loading} 
                        errorMessage={errorMessage} 
                        products={products} 
                        sortingFunction={sortingFunction} 
                        filters={filters} 
                        searchString={searchString} 
                        changeItemQuantityFunction={changeItemQuantityFunction} 
                        focusProductFunction={this.setProductFocus} 
                        appStateInfo={appStateInfo} 
                    />
                </div>
                <Footer />
                {focusedProduct && 
                    <ProductModal 
                        product={focusedProductObj} 
                        focusProductFunction={this.setProductFocus} 
                        quantityInCart={cart[focusedProductObj.name] ? cart[focusedProductObj.name] : 0} 
                        changeItemQuantityFunction={changeItemQuantityFunction} 
                    />
                }
            </div>
        )
    }
}

export default BrowsingPage;