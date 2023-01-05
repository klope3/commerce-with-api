import React from "react";
import "./InputField.css";

class InputField extends React.Component {
    render() {
        const { 
            fieldData: {
                labelText,
                name,
                id,
                rowClass,
                type,
                options,
                min,
                value,
                errorText,
            },
            changeFunction,
            blurFunction,
        } = this.props;
        const idToUse = id ? id : name;
        const valueToUse = value || "";
        return (
            <div className={`input-row ${rowClass ? rowClass : ""}`}>
                <label htmlFor={id ? id : name}>{labelText}</label>
                <div className="input-container">
                    {type !== "select" &&
                        <input
                            type={type || "text"}
                            name={name}
                            id={idToUse}
                            onChange={changeFunction}
                            onBlur={blurFunction}
                            value={valueToUse}
                            min={min}
                        />
                    }
                    {type === "select" &&
                        <select name={name} id={idToUse} value={valueToUse} onChange={changeFunction} onBlur={blurFunction}>
                            {["", ...options].map(item => <option key={item}>{item}</option>)}
                        </select>
                    }
                </div>
                {errorText && <span className="error-text">{errorText}</span>}
            </div>
        )
    }
}

export default InputField;