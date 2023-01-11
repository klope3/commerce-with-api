import React from "react";
import "../InputGroups.css";

class RangeGroup extends React.Component {
    render() {
        const { 
            headingText, 
            type, 
            symbolBeforeField, 
            dataTag, 
            changeFunction 
        } = this.props;
        const fields = type === "date" ? 
        [
            {
                name: "earliest",
                label: "Earliest",
            },
            {
                name: "latest",
                label: "Latest",
            },
        ] :
        [
            {
                name: "min",
                label: "Min",
            },
            {
                name: "max",
                label: "Max",
            }
        ];
        return (
            <div>
                <div className="bold-text">{headingText}</div>
                <div>
                    {fields.map(item => (
                        <div className="range-field-row">
                            <div className="range-field-label">{item.label}:</div>
                            <div>{symbolBeforeField}</div>
                            <input 
                                type={type} 
                                name={item.name} 
                                id={item.name} 
                                data-tag={dataTag} 
                                onChange={changeFunction} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default RangeGroup;