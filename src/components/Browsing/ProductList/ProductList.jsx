import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

class ProductList extends React.Component {
    render() {
        const { 
            products,
            loading,
            errorMessage,
            sortingFunction,
        } = this.props;
        const sortedProducts = products ? sortingFunction(products) : undefined;
        return (
            <div className="product-list">
                {errorMessage && <div className="error-text">{errorMessage}</div>}
                {loading && <div>Loading...</div>}
                {!errorMessage && !loading && sortedProducts.map(item => <ProductCard key={item.name} product={item}/>)}
            </div>
        )
    }
}

export default ProductList;