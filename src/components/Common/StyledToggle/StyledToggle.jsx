import React from "react";

class StyledToggle extends React.Component {
    render() {
        const { headingText, inputId, dataTag, changeFunction } = this.props;
        return (
            <div>
                <div className="bold-text">{headingText}</div>
                <div>
                    <input type="checkbox" name={inputId} id={inputId} data-tag={dataTag} onChange={changeFunction} />
                </div>
            </div>
        )
    }
}

export default StyledToggle;