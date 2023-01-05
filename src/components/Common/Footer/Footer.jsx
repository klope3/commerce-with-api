import React from "react";
import { brandName } from "../../../constants";
import HomePortal from "../HomePortal/HomePortal";
import "./Footer.css";

class Footer extends React.Component {
    render() {
        const categories = [
            {
                heading: "Contact",
                links: [
                    "Technical Support",
                    "Real-Time Chat",
                    "Email",
                ],
            },
            {
                heading: "Legal",
                links: [
                    "Privacy Policy",
                    "Royalty-Free License",
                    "Terms of Service",
                ],
            },
            {
                heading: "About Us",
                links: [
                    "Our Mission",
                    "Company",
                    "Careers",
                    "Site Map",
                ],
            },
        ];
        return (
            <footer>
                <div className={`${this.props.spreadContent ? "" : "container-main"}`}>
                    <div className="footer-flex">
                        <HomePortal />
                        {categories.map(category => (
                            <div key={category.heading}>
                                <div className="footer-heading">{category.heading}</div>
                                {category.links.map(link => <button key={link} className="link-button">{link}</button>)}
                            </div>
                        ))}
                    </div>
                    <div className="copyright">©2022 {brandName}</div>
                </div>
            </footer>
        )
    }
}

export default Footer;