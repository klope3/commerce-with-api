import React from "react";
import "./CheckBox.css";

class CheckBox extends React.Component {
    render() {
        const { label, id, changeFunction } = this.props;
        return (
            <label className="checkbox-label" htmlFor={id}>
                <input type="checkbox" name={id} id={id} onChange={changeFunction} />
                {label}
            </label>
        )
    }
}

export default CheckBox;