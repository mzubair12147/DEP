import { useContext } from 'react';
import {ShopContext} from '../context/shopContext.jsx';
import { useParams } from 'react-router-dom';
import './CSS/Product.css';
import BreadCrum from '../components/BreadCrum/BreadCrum.jsx';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay.jsx';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox.jsx';
import RelatedProduct from '../components/RelatedProducts/RelatedProduct.jsx';

export default function Product() {
  const {allProducts} = useContext(ShopContext);
  const {productId} = useParams();
  
  const product = allProducts.find(function(product){
    return product.id === Number(productId);
  });
  
  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  )
}
