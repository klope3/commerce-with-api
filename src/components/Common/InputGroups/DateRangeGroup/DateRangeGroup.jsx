import React from "react";

class DateRangeGroup extends React.Component {
    render() {
        const { headingText, dataTag, changeFunction } = this.props;
        return (
            <div>
                <div className="bold-text">{headingText}</div>
                <div>
                    <input type="date" name={"earliest"} id={"earliest"} data-tag={dataTag} onChange={changeFunction} />
                    <input type="date" name={"latest"} id={"latest"} data-tag={dataTag} onChange={changeFunction} />
                </div>
            </div>
        )
    }
}

export default DateRangeGroup;