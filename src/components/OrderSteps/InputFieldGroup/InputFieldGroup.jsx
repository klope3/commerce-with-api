import React from "react";
import InputField from "../../Common/InputField/InputField";

class InputFieldGroup extends React.Component {
    render() {
        const {
            groupClass,
            fields,
            blurFunction,
            changeFunction,
        } = this.props;
        return (
            <div className={groupClass}>
                {fields.map(item => <InputField key={item.name} fieldData={item} blurFunction={blurFunction} changeFunction={changeFunction} />)}
            </div>
        )
    }
}

export default InputFieldGroup;