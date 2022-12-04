import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

class ProductList extends React.Component {
    render() {
        const { products } = this.props;
        return (
            <div className="product-list">
                {products.map(item => <ProductCard key={item.name} product={item}/>)}
            </div>
        )
    }
}

export default ProductList;