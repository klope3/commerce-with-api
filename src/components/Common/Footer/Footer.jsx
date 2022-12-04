import React from "react";
import { brandName } from "../../../constants";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div>About Us</div>
                <div>Contact</div>
                <div>Careers</div>
                <div>Privacy Policy</div>
                <div>©2022 {brandName}</div>
            </footer>
        )
    }
}

export default Footer;