import React from "react";
import { fakeProducts } from "../../../fakeProducts";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import FilterBar from "../FilterBar/FilterBar";
import ProductList from "../ProductList/ProductList";
import SearchBar from "../SearchBar/SearchBar";
import "./BrowsingPage.css";



class BrowsingPage extends React.Component {
    render() {
        return (
            <>
                <Header />
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