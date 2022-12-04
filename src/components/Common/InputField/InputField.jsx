import React from "react";

class InputField extends React.Component {
    render() {
        const { 
            fieldData: {
                labelText,
                name,
                id,
            } 
        } = this.props;
        return (
            <div>
                <label htmlFor={id ? id : name}>{labelText}</label>
                <input type="text" name={name} id={id ? id : name} />
            </div>
        )
    }
}

export default InputField;