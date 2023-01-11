import React from "react";
import { brandName } from "../../../constants";
import "./HomePortal.css";

class HomePortal extends React.Component {
    render() {
        const { 
            navFunction,
            buttonName,
            id,
        } = this.props;
        return (
            <button 
                name={buttonName ? buttonName : "main"} 
                className="home-portal" 
                id={id} 
                onClick={navFunction} 
                style={{pointerEvents: navFunction ? "initial" : "none"}}
            >
                {brandName}
            </button>
        )
    }
}

export default HomePortal;