import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

class ProductList extends React.Component {
    objectHasAnyTruthyValue = object => Object.keys(object).find(key => object[key] != false);
    getProductAttribute = (product, attributeName) => product.attributes.find(attribute => attribute.name === attributeName);
    shouldUseFilter = (filterName, filterInputs) => {
        return Object.keys(filterInputs).includes(filterName) && this.objectHasAnyTruthyValue(filterInputs[filterName]);
    }
    isInNumberRange = (value, minMaxObject) => {
        const { min: givenMin, max: givenMax } = minMaxObject;
        const min = givenMin === undefined ? 0 : parseInt(givenMin);
        const max = givenMax === undefined || parseInt(givenMax) <= 0 ? Number.MAX_VALUE : parseInt(givenMax);
        return (value >= min && value <= max);
    }

    filterProducts = (products, filterInputs) => {
        let result = products;

        const filterFunctions = {
            "Author": product => {
                const name = "Author";
                const productAuthor = this.getProductAttribute(product, name).value[0].value;
                return filterInputs[name][productAuthor];
            },
            "File Formats": product => {
                const name = "File Formats";
                const productFormatLabels = this.getProductAttribute(product, name).value.map(item => item.label);
                for (const i in productFormatLabels) {
                    if (filterInputs[name][productFormatLabels[i]]) {
                        return true;
                    }
                }
                return false;
            },
            "Polygon Count": product => {
                const name = "Polygon Count";
                const productPolygons = this.getProductAttribute(product, name).value;
                return this.isInNumberRange(productPolygons, filterInputs[name]);
            },
            "Publication Date": product => {
                const name = "Publication Date";
                const productDate = this.getProductAttribute(product, name).value;
                const { earliest: givenEarliest, latest: givenLatest } = filterInputs[name];
                const earliest = givenEarliest === undefined ? "0" : givenEarliest;
                const latest = givenLatest === undefined ? "9999/99/99" : givenLatest;
                return productDate >= earliest && productDate <= latest;
            },
            "Game Ready": product => this.getProductAttribute(product, "Game Ready").value,
            "Animation Ready": product => this.getProductAttribute(product, "Animation Ready").value,
            "price": product => this.isInNumberRange(product.price.raw, filterInputs["price"]),
            "category": product => product.categories.length && filterInputs["category"][product.categories[0].name] === true,
        }

        for (const key in filterInputs) {
            if (!this.shouldUseFilter(key, filterInputs)) continue;
            result = result.filter(product => filterFunctions[key](product));
        }

        return result;
    }

    render() {
        const { 
            products,
            loading,
            errorMessage,
            sortingFunction,
            filters,
            searchString,
            changeItemQuantityFunction,
            focusProductFunction,
            appStateInfo: { cart },
        } = this.props;
        const searchRegex = new RegExp(`${searchString}`, "i");
        const searchedProducts = products ? 
            products.filter(product => (
                !searchString || !searchString.length || 
                product.name.match(searchRegex) || product.description.match(searchRegex)
            )) : undefined;
        const filteredProducts = searchedProducts && filters ? 
            this.filterProducts(searchedProducts, filters, searchString) : undefined;
        const sortedProducts = filteredProducts ? sortingFunction(filteredProducts) : undefined;
        return (
            <div className="product-list-container">
                {errorMessage && <div className="error-text">{errorMessage}</div>}
                {loading && <div>Loading...</div>}
                {!errorMessage && !loading && <div className="result-count">Found {sortedProducts.length} results.</div>}
                <div className="product-list">
                    {!errorMessage && !loading && sortedProducts
                        .map(product => {
                            return <ProductCard
                                key={product.name}
                                product={product}
                                quantityInCart={cart[product.name] ? cart[product.name] : 0}
                                changeItemQuantityFunction={changeItemQuantityFunction}
                                focusProductFunction={focusProductFunction}/>
                            }
                        )
                    }
                </div>
            </div>
        )
    }
}

export default ProductList;