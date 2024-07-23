import { Link } from "react-router-dom";
import "./Item.css";

export default function Item(props) {
    const { id, image, name, newPrice, oldPrice } = props;
    return (
        <div className="item">
            <Link to={`/product/${id}`}>
                <img onClick={window.scrollTo(0,0)} src={image} alt="product image" />
            </Link>
            <p>{name}</p>
            <div className="item-prices">
                <div className="item-price-new">${newPrice}</div>
                <div className="item-price-old">${oldPrice}</div>
            </div>
        </div>
    );
}
