import React from "react";
import SearchSettings from "../SearchSettings/SearchSettings";

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { searchString: "" };
    }

    changeSearchString = event => this.setState({ searchString: event.target.value });

    render() {
        const { changeSortingFunction, changeSearchFunction } = this.props
        return (
            <div className="search-bar">
                <div>
                    <input type="text" name="search" id="search" onChange={this.changeSearchString} />
                    <button onClick={changeSearchFunction} data-search-string={this.state.searchString}>Search</button>
                </div>
                <SearchSettings changeSortingFunction={changeSortingFunction} />
            </div>
        )
    }
}

export default SearchBar;