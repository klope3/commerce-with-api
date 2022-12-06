import React from "react";
import "./InputField.css";

class InputField extends React.Component {
    render() {
        const { 
            fieldData: {
                labelText,
                name,
                id,
                value,
                errorText,
            },
            changeFunction,
            blurFunction,
        } = this.props;
        return (
            <div className="input-row">
                <label htmlFor={id ? id : name}>{labelText}</label>
                <input type="text" name={name} id={id ? id : name} onChange={changeFunction} onBlur={blurFunction} value={value || ""} />
                {errorText && <span className="error-text">{errorText}</span>}
            </div>
        )
    }
}

export default InputField;