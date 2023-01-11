import React from "react";
import "./RadioGroup.css";

class RadioGroup extends React.Component {
    render() {
        const {
            groupName,
            id,
            radios,
            fieldChangeFunction,
        } = this.props;
        return (
            <div className="radio-group" id={id}>
                {radios.map(radio => (
                    <label key={radio.id} htmlFor={radio.id}>
                        <input 
                            type="radio" 
                            name={groupName} 
                            id={radio.id} 
                            checked={radio.checked} 
                            onChange={fieldChangeFunction} 
                        />
                        <div className={`radio-group-option-content ${radio.contentContainerClass || ""}`}>
                            {radio.content}
                        </div>
                    </label>
                ))}
            </div>
        )
    }
}

export default RadioGroup;