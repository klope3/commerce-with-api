import React from "react";
import SearchField from "../../Common/SearchField/SearchField";
import SearchSettings from "../SearchSettings/SearchSettings";
import "./SearchBar.css";

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
                <SearchField name="search" id="search" changeFunction={this.changeSearchString} buttonFunction={changeSearchFunction} searchString={this.state.searchString} />
                {/* <div>
                    <input type="text" name="search" id="search" onChange={this.changeSearchString} />
                    <button onClick={changeSearchFunction} data-search-string={this.state.searchString}>Search</button>
                </div> */}
                <SearchSettings changeSortingFunction={changeSortingFunction} />
            </div>
        )
    }
}

export default SearchBar;