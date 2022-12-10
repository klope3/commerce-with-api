import React from "react";
import CheckBox from "../../Common/CheckBox/CheckBox";

class FilterBar extends React.Component {
    render() {
        const { changeFilterFunction } = this.props;
        return (
            <div>
                <CheckBox label="filter1" id="filter1" changeFunction={changeFilterFunction} />
                <CheckBox label="filter2" id="filter2" changeFunction={changeFilterFunction} />
                <CheckBox label="filter3" id="filter3" changeFunction={changeFilterFunction} />
                <CheckBox label="filter4" id="filter4" changeFunction={changeFilterFunction} />
                <CheckBox label="filter5" id="filter5" changeFunction={changeFilterFunction} />
                <button>Apply</button>
            </div>
        )
    }
}

export default FilterBar;