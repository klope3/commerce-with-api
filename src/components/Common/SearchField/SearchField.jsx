import React from "react";
import "./SearchField.css";

class SearchField extends React.Component {
    render() {
        const {
            name,
            id,
            changeFunction,
            buttonFunction,
            searchString,
        } = this.props;
        return (
            <div className="search-field">
                <input type="text" name={name} id={id} onChange={changeFunction} />
                <button onClick={buttonFunction} data-search-string={searchString}>Search</button>
            </div>
        )
    }
}

export default SearchField;