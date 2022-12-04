import React from "react";
import CheckBox from "../../Common/CheckBox/CheckBox";

class FilterBar extends React.Component {
    render() {
        return (
            <div>
                <CheckBox label="filter1" />
                <CheckBox label="filter2" />
                <CheckBox label="filter3" />
                <CheckBox label="filter4" />
                <CheckBox label="filter5" />
                <button>Apply</button>
            </div>
        )
    }
}

export default FilterBar;