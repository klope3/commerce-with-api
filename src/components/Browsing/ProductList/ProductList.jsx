import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

class ProductList extends React.Component {
    objectHasAnyTruthyValue = object => {
        // console.log("Checking for truthy values in the following object");
        // console.log(object);
        // if (Object.keys(object).find(key => object[key] != false)) console.log("Has at least one truthy value.");
        return Object.keys(object).find(key => object[key] != false);
    }
    getProductAttribute = (product, attributeName) => product.attributes.find(attribute => attribute.name === attributeName);
    shouldUseFilter = (filterName, filters) => {
        // console.log("Checking whether to use the attribute " + attributeName);
        // console.log(Object.keys(filters).includes(attributeName) + ", " + (filters[attributeName] && this.objectHasAnyTruthyValue(filters[attributeName])));
        // if (!Object.keys(filters).includes(attributeName)) console.log("Not filtering for attribute " + attributeName + " because no object with that data was found in filters.");
        // else if (!this.objectHasAnyTruthyValue(filters[attributeName])) console.log("Not filtering for attribute " + attributeName + " because the corresponding object has no truthy values.");
        return Object.keys(filters).includes(filterName) && this.objectHasAnyTruthyValue(filters[filterName]);
    }

    filterProducts = (products, filters) => {
        let result = products;
        if (this.shouldUseFilter("Author", filters)) {
            result = products.filter(product => {
                const authorOfProduct = this.getProductAttribute(product, "Author").value[0].value;
                return filters["Author"][authorOfProduct];
            });
        }

        if (this.shouldUseFilter("File Formats", filters)) {
            result = result.filter(product => {
                const productFormatLabels = this.getProductAttribute(product, "File Formats").value.map(item => item.label);
                for (const i in productFormatLabels) {
                    if (filters["File Formats"][productFormatLabels[i]]) {
                        return true;
                    }
                }
                return false;
            });
        }
        
        if (this.shouldUseFilter("Polygon Count", filters)) {
            result = result.filter(product => {
                const productPolygons = this.getProductAttribute(product, "Polygon Count").value;
                const { min: givenMin, max: givenMax } = filters["Polygon Count"];
                const min = givenMin === undefined ? 0 : parseInt(givenMin);
                const max = givenMax === undefined || parseInt(givenMax) <= 0 ? Number.MAX_VALUE : parseInt(givenMax);
                return (productPolygons >= min && productPolygons <= max);
            });
        }

        if (this.shouldUseFilter("Publication Date", filters)) {
            result = result.filter(product => {
                const productDate = this.getProductAttribute(product, "Publication Date").value;
                const { earliest: givenEarliest, latest: givenLatest } = filters["Publication Date"];
                const earliest = givenEarliest === undefined ? "0" : givenEarliest;
                const latest = givenLatest === undefined ? "9999/99/99" : givenLatest;
                return productDate >= earliest && productDate <= latest;
            });
        }

        if (this.shouldUseFilter("Game Ready", filters)) {
            result = result.filter(product => this.getProductAttribute(product, "Game Ready").value);
        }

        if (this.shouldUseFilter("Animation Ready", filters)) {
            result = result.filter(product => this.getProductAttribute(product, "Animation Ready").value);
        }

        if (this.shouldUseFilter("price", filters)) {
            result = result.filter(product => {
                const price = product.price.raw;
                const { min: givenMin, max: givenMax } = filters["price"];
                const min = givenMin === undefined ? 0 : parseInt(givenMin);
                const max = givenMax === undefined || parseInt(givenMax) <= 0 ? Number.MAX_VALUE : parseInt(givenMax);
                return (price >= min && price <= max);
            });
        }



        return result;
    } //will need custom implementation based on specific products, attributes, use case

    render() {
        const { 
            products,
            loading,
            errorMessage,
            sortingFunction,
            filters,
        } = this.props;
        const filteredProducts = products && filters ? this.filterProducts(products, filters) : undefined;
        const sortedProducts = filteredProducts ? sortingFunction(filteredProducts) : undefined;
        return (
            <div className="product-list">
                {errorMessage && <div className="error-text">{errorMessage}</div>}
                {loading && <div>Loading...</div>}
                {!errorMessage && !loading && <div>Found {sortedProducts.length} results.</div>}
                {!errorMessage && !loading && sortedProducts.map(item => <ProductCard key={item.name} product={item}/>)}
            </div>
        )
    }
}

export default ProductList;