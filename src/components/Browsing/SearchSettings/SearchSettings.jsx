import React from "react";
import { sortingFunctions } from "../../../productSorting";

class SearchSettings extends React.Component {
    render() {
        const { changeSortingFunction } = this.props;
        return (
            <div>
                Sort By: 
                <select name="sortSettings" id="sortSettings" onChange={changeSortingFunction}>
                    {sortingFunctions.map(item => <option key={item.name} value={item.name}>{item.name}</option>)}
                </select>
            </div>
        )
    }
}

export default SearchSettings;