import React from "react";
import SearchSettings from "../SearchSettings/SearchSettings";

class SearchBar extends React.Component {
    render() {
        return (
            <div className="search-bar">
                <div>
                    <input type="text" name="search" id="search" />
                    <button>Search</button>
                </div>
                <SearchSettings />
            </div>
        )
    }
}

export default SearchBar;