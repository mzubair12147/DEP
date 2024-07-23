import { useContext } from 'react';
import './CSS/ShopCategory.css';
import {ShopContext} from '../context/shopContext';
import dropDownIcon from '../components/assets/Frontend_Assets/dropdown_icon.png'
import Item from '../components/Item/Item.jsx';

export default function ShopCategory({category, banner}) {
  const {allProducts} = useContext(ShopContext);
  console.log(allProducts);
  return (
    <div className="shop-category">
      <img className='shop-category-banner' src={banner} alt='banner image' />
      <div className='shop-category-index-sort'>
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>

        <div className='shop-category-sort'>
          sort By <img src={dropDownIcon} alt='drop down icon' />
        </div>
        <div className='shop-category-products'>
          {allProducts.map((product,index) => product.category === category ? <Item
                        key={index}
                        id={product.id}
                        name={product.name}
                        image={product.image}
                        newPrice={product.new_price}
                        oldPrice={product.old_price}
                    /> : <></>)}
        </div>

        <div className='shop-category-load-more'>
          Explore more
        </div>
      </div>
    </div>
  )
}
