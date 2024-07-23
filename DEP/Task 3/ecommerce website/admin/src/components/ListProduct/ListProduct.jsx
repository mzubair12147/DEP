import { useEffect, useState } from "react";
import "./ListProduct.css";
import removeIcon from "../../assets/cross_icon.png";
export default function ListProduct() {
  const [allProducts, setAllProducts] = useState([]);

  async function fetchProducts() {
    const response = await fetch("http://localhost:5000/all-products");
    const data = await response.json();
    setAllProducts(data.data);
  }
  useEffect(function () {
    fetchProducts();
  }, []);

  async function handleRemoveProduct(id){
    await fetch('http://localhost:5000/remove-product',{
      method:'POST', 
      headers:{
        Accept:"application/json",
        'Content-Type':'application/json'
      },body:JSON.stringify({id:id})
    })
    await fetchProducts();
  }

  return (
    <div className="list-product">
      <h1>All Products List</h1>
      <div className="list-product-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className="list-product-all-products">
        <hr />
        {allProducts.map((product, index) => {
          return (
            <>
              <div
                key={index}
                className="list-product-format-main list-product-format"
              >
                <img
                  className="list-product-product-icon"
                  src={product.image}
                />
                <p>{product.name}</p>
                <p>${product.oldPrice}</p>
                <p>${product.newPrice}</p>
                <p>{product.category}</p>
                <img onClick={() => handleRemoveProduct(product.id)} className="list-product-remove-icon" src={removeIcon} />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
}
