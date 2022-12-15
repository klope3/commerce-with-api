import React from "react";
import "./CheckBox.css";

class CheckBox extends React.Component {
    render() {
        const { label, id, dataTag, changeFunction } = this.props;
        return (
            <label className="checkbox-label" htmlFor={id}>
                <input type="checkbox" name={id} id={id} data-tag={dataTag} onChange={changeFunction} />
                {label}
            </label>
        )
    }
}

export default CheckBox;