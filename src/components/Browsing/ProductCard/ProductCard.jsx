import React from "react";
import "./ProductCard.css";

class ProductCard extends React.Component {
    render() {
        const { 
            product: { 
                name, 
                description, 
                price: { formatted_with_symbol: price },
                image: { url: imgUrl },
                attributes,
            } 
        } = this.props;
        return (
            <div className="product-card">
                <div><img src={imgUrl}></img></div>
                <div>{name}</div>
                <div>{description.replace(/(<p>|<\/p>)/g, "")}</div>
                <div>{price}</div>
                {/* <div>{attributes.find(attribute => attribute.name === "Author").value[0].value}</div> */}
                {/* <div>{attributes.find(attribute => attribute.name === "File Formats").value.map(item => <div key={item.label}>{item.label}</div>)}</div> */}
                {/* <div>Poly count: {attributes.find(attribute => attribute.name === "Polygon Count").value}</div> */}
                {/* <div>Publication Date: {attributes.find(attribute => attribute.name === "Publication Date").value}</div> */}
                {/* <div>Game Ready? {attributes.find(attribute => attribute.name === "Game Ready").value ? "True" : "False"}</div> */}
                {/* <div>Animation Ready? {attributes.find(attribute => attribute.name === "Animation Ready").value ? "True" : "False"}</div> */}
            </div>
        )
    }
}

export default ProductCard;