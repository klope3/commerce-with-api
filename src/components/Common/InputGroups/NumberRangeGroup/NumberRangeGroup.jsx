import React from "react";

class NumberRangeGroup extends React.Component {
    render() {
        const { headingText, idPrefix, dataTag, changeFunction } = this.props;
        return (
            <div>
                <div className="bold-text">{headingText}</div>
                <div>
                    <input type="number" name={"min"} id={"min"} data-tag={dataTag} onChange={changeFunction} />
                    <input type="number" name={"max"} id={"max"} data-tag={dataTag} onChange={changeFunction} />
                </div>
            </div>
        )
    }
}

export default NumberRangeGroup;