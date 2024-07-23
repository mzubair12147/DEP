import dataProduct from '../assets/Frontend_Assets/data.js';
import Item from '../Item/Item.jsx';
import './RelatedProduct.css'

export default function RelatedProduct() {
  return (
    <div className="related-product">
        <h1>Related Products</h1>
        <hr/>
        <div className="related-product-item">
            {dataProduct.map((product,index) => {
                return <Item
                        key={index}
                        id={product.id}
                        name={product.name}
                        image={product.image}
                        newPrice={product.new_price}
                        oldPrice={product.old_price}
                    />
            })}
        </div>
    </div>
  )
}
