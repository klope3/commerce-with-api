import React from "react";
import CheckBox from "../../CheckBox/CheckBox";

class MultiSelectGroup extends React.Component {
    render() {
        const { headingText, options, dataTag, changeFunction } = this.props;
        return (
            <div>
                <div className="bold-text">{headingText}</div>
                {options.map(item => <CheckBox key={item} label={item} id={`${item}`} dataTag={dataTag} changeFunction={changeFunction} />)}
            </div>
        )
    }
}

export default MultiSelectGroup;