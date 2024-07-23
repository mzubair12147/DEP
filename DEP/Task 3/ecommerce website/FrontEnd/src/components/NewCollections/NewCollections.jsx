import "./NewCollections.css";
import Item from "../Item/Item";
import { useEffect, useState } from "react";

export default function NewCollections() {
    const [newCollections, setNewCollectins] = useState([]);

    useEffect(function () {
        fetch("http://localhost:5000/newCollection")
            .then((response) => response.json())
            .then((data) => setNewCollectins(data.data));
    }, []);
 
    return (
        <div className="new-collections">
            <h1>New Collections</h1>
            <hr />
            <div className="collections">
                {newCollections.map((product, index) => (
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
