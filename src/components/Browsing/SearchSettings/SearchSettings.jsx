import React from "react";

class SearchSettings extends React.Component {
    render() {
        const { changeSortingFunction } = this.props;
        return (
            <div>
                Sort By: 
                <select name="sortSettings" id="sortSettings" onChange={changeSortingFunction}>
                    <option value="alphaAscending">A-Z</option>
                    <option value="alphaDescending">Z-A</option>
                    <option value="priceAscending">Price Low to High</option>
                    <option value="priceDescending">Price High to Low</option>
                </select>
            </div>
        )
    }
}

export default SearchSettings;