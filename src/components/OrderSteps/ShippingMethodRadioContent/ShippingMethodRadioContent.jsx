import React from "react";

class ShippingMethodRadioContent extends React.Component {
    render() {
        const {
            title,
            description,
            priceText
        } = this.props;
        return (
            <>
                <div>
                    <div className="bold-text">{title}</div>
                    <div>{description}</div>
                </div>
                <div className="bold-text">{priceText}</div>
            </>
        )
    }
}

export default ShippingMethodRadioContent;