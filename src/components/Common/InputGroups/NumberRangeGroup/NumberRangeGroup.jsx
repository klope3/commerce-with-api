import React from "react";
import "../InputGroups.css";

class NumberRangeGroup extends React.Component {
    render() {
        const { headingText, dataTag, changeFunction } = this.props;
        const fields = [
            {
                name: "min",
                label: "Min",
            },
            {
                name: "max",
                label: "Max",
            },
        ]
        return (
            <div>
                <div className="bold-text">{headingText}</div>
                <div>
                    {fields.map(item => (
                        <div key={item.name} className="range-field-row">
                            <div>{item.label}: </div>
                            <input type="number" name={item.name} id={item.name} data-tag={dataTag} onChange={changeFunction} />
                        </div>
                    ))}
                    {/* <div>
                        <div>Min:</div>
                        <input type="number" name={"min"} id={"min"} data-tag={dataTag} onChange={changeFunction} />
                    </div>
                    <input type="number" name={"max"} id={"max"} data-tag={dataTag} onChange={changeFunction} /> */}
                </div>
            </div>
        )
    }
}

export default NumberRangeGroup;