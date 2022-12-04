import React from "react";
import { brandName } from "../../../constants";

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>{brandName}</h1>
            </header>
        )
    }
}

export default Header;