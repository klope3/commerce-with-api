import React from "react";
import "./NumberField.css";

class NumberField extends React.Component {
    render() {
        return (
            <div className="number-field">
                <button>-</button>
                <input type="number" />
                <button>+</button>
            </div>
        )
    }
}

export default NumberField;