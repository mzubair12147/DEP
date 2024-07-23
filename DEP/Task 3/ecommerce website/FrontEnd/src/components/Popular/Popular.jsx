import "./Popular.css";
import Item from "../Item/Item.jsx";
import { useEffect, useState } from "react";

export default function Popular() {
    const [productsData, setProductsData] = useState([]);

    useEffect(function () {
        fetch("http://localhost:5000/newCollection")
            .then((response) => response.json())
            .then((data) => setProductsData(data.data));
    }, []);

    return (
        <div className="popular">
            <h1>Popular in Women</h1>
            <hr />
            <div className="popular-item">
                {productsData.map((product, index) => (
                    <Item
                        key={index}
                        id={product.id}
                        name={product.name}
                        image={product.image}
                        newPrice={product.new_price}
                        oldPrice={product.old_price}
                    />
                ))}
            </div>
        </div>
    );
}
