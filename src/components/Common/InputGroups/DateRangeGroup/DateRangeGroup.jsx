import React from "react";
import "../InputGroups.css";

class DateRangeGroup extends React.Component {
    render() {
        const { headingText, dataTag, changeFunction } = this.props;
        const fields = [
            {
                name: "earliest",
                label: "Earliest: ",
            },
            {
                name: "latest",
                label: "Latest: ",
            },
        ]
        return (
            <div>
                <div className="bold-text">{headingText}</div>
                <div>
                    {fields.map(item => (
                        <div className="">
                            <div>{item.label}</div>
                            <input type="date" name={item.name} id={item.name} data-tag={dataTag} onChange={changeFunction} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default DateRangeGroup;