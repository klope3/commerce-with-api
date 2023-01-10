import { faListCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MultiSelectGroup from "../../Common/InputGroups/MultiSelectGroup/MultiSelectGroup";
import RangeGroup from "../../Common/InputGroups/RangeGroup/RangeGroup";
import StyledToggle from "../../Common/StyledToggle/StyledToggle";
import "./FilterBar.css";

class FilterBar extends React.Component {
    constructor() {
        super();
        this.state = { expanded: false };
    }

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
                    <RangeGroup 
                        key={attribute.name}
                        headingText={attribute.name} 
                        type="number"
                        idPrefix={attribute.name} 
                        dataTag={attribute.name}
                        changeFunction={changeFunction} 
                    />
                );
            case "date":
                return (
                    <RangeGroup 
                        key={attribute.name}
                        headingText={attribute.name} 
                        type="date"
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

    toggleExpanded = () => this.setState(prevState => ({expanded: !prevState.expanded}));

    render() {
        const { productAttributes, productCategories, changeFilterFunction } = this.props;
        return (
            <>
                {this.state.expanded && <div className="filter-bar-blocker"></div>}
                <div className="filter-bar" style={{left: this.state.expanded ? 0 : undefined}}>
                    <div className="filter-bar-scrollable">
                        {productAttributes.data && 
                            productAttributes.data.map(item => this.chooseComponentForAttribute(item, changeFilterFunction))
                        }
                        <RangeGroup 
                            headingText="Price" 
                            symbolBeforeField="$" 
                            type="number" 
                            dataTag="price" 
                            changeFunction={changeFilterFunction} 
                        />
                        {productCategories.data && 
                            <MultiSelectGroup 
                                headingText="Category" 
                                dataTag="category" 
                                options={productCategories.data.map(item => item.name)} 
                                changeFunction={changeFilterFunction} 
                            />
                        }
                    </div>
                    <button className="filter-bar-button" onClick={this.toggleExpanded}>
                        <FontAwesomeIcon icon={this.state.expanded ? faXmark : faListCheck} />
                    </button>
                </div>
            </>
        )
    }
}

export default FilterBar;