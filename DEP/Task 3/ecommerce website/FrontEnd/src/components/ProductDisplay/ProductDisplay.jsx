import "./ProductDisplay.css";
import starIcon from "../assets/Frontend_Assets/star_icon.png";
import starDullIcon from "../assets/Frontend_Assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";


export default function ProductDisplay({ product }) {
    const {addToCart} = useContext(ShopContext);

    return (
        <div className="product-display">
            <div className="product-display-left">
                <div className="product-display-image-list">
                    <img src={product.image} alt="product image" />
                    <img src={product.image} alt="product image" />
                    <img src={product.image} alt="product image" />
                    <img src={product.image} alt="product image" />
                </div>

                <div className="product-display-image">
                    <img
                        src={product.image}
                        className="product-display-main-image"
                        alt="product main image"
                    />
                </div>
            </div>
            <div className="product-display-right">
                <h1>{product.name}</h1>
                <div className="product-display-right-star">
                    <img src={starIcon} alt="star rating" />
                    <img src={starIcon} alt="star rating" />
                    <img src={starIcon} alt="star rating" />
                    <img src={starIcon} alt="star rating" />
                    <img src={starDullIcon} alt="star rating" />
                    <p>(1000)</p>
                </div>

                <div className="product-display-right-prices">
                    <div className="product-display-right-price-old">
                        ${product.old_price}
                    </div>
                    <div className="product-display-right-price-new">
                        ${product.new_price}
                    </div>
                </div>

                <div className="product-display-right-description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nostrum mollitia quae nihil odit beatae libero cumque
                    voluptatibus? Incidunt repudiandae quisquam labore
                    necessitatibus fugit aut quo ad provident! Molestiae maiores
                    obcaecati omnis architecto recusandae expedita deleniti
                    voluptate modi doloribus, dolor esse illo iusto. Facilis
                    dignissimos ullam amet nemo. Excepturi, soluta! Voluptates.
                </div>

                <div className="product-display-right-size">
                    <h1>Select Size</h1>
                    <div className="product-display-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=> addToCart(product.id)}>Add to Cart</button>
                <p className="product-display-right-category"><span>Category :</span> Women, T-Shirt, Crop Top</p>
                <p className="product-display-right-category"><span>Tags :</span> Modern, Latest</p>
            </div>
        </div>
    );
}
