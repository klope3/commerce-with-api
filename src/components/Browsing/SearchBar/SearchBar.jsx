import React from "react";
import SearchSettings from "../SearchSettings/SearchSettings";

class SearchBar extends React.Component {
    render() {
        const { changeSortingFunction } = this.props
        return (
            <div className="search-bar">
                <div>
                    <input type="text" name="search" id="search" />
                    <button>Search</button>
                </div>
                <SearchSettings changeSortingFunction={changeSortingFunction} />
            </div>
        )
    }
}

export default SearchBar;