import React from "react";
import CheckBox from "../../Common/CheckBox/CheckBox";
import DateRangeGroup from "../../Common/InputGroups/DateRangeGroup/DateRangeGroup";
import MultiSelectGroup from "../../Common/InputGroups/MultiSelectGroup/MultiSelectGroup";
import NumberRangeGroup from "../../Common/InputGroups/NumberRangeGroup/NumberRangeGroup";
import StyledToggle from "../../Common/StyledToggle/StyledToggle";
import "./FilterBar.css";

class FilterBar extends React.Component {
    chooseComponentForAttribute = (attribute, changeFunction) => {
        switch (attribute.type) {
            case "options":
                return (
                    <MultiSelectGroup 
                        key={attribute.name}
                        headingText={attribute.name} 
                        idPrefix={attribute.name} 
                        dataTag={attribute.name}
                        options={attribute.options.map(option => option.label)} 
                        changeFunction={changeFunction} 
                    />
                );
            case "number":
                return (
                    <NumberRangeGroup 
                        key={attribute.name}
                        headingText={attribute.name} 
                        idPrefix={attribute.name} 
                        dataTag={attribute.name}
                        changeFunction={changeFunction} 
                    />
                );
            case "date":
                return (
                    <DateRangeGroup 
                        key={attribute.name}
                        headingText={attribute.name} 
                        idPrefix={attribute.name} 
                        dataTag={attribute.name}
                        changeFunction={changeFunction} 
                    />
                );
            case "checkbox":
                return (
                    <StyledToggle 
                        key={attribute.name}
                        headingText={attribute.name} 
                        inputId={attribute.name} 
                        dataTag={attribute.name}
                        changeFunction={changeFunction} 
                    />
                );
            default:
                return <></>;
        }
    }

    render() {
        const { productAttributes, productCategories, changeFilterFunction } = this.props;
        return (
            <div className="filter-bar">
                {productAttributes.data && productAttributes.data.map(item => this.chooseComponentForAttribute(item, changeFilterFunction))}
                <NumberRangeGroup headingText="Price" dataTag="price" changeFunction={changeFilterFunction} />
                {productCategories.data && <MultiSelectGroup headingText="Category" dataTag="category" options={productCategories.data.map(item => item.name)} changeFunction={changeFilterFunction} />}
            </div>
        )
    }
}

export default FilterBar;