import { useContext } from 'react';
import {ShopContext} from '../../context/shopContext.jsx';
import removeIcon from '../assets/Frontend_Assets/cart_cross_icon.png'

import './CartItems.css';
export default function CartItems() {
    const {allProducts, removeFromCart, cartItems, getTotalValue} = useContext(ShopContext);
  return (
    <div className='cart-items'>
        <div className='cart-items-format-main'>
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>

        <hr />

        {allProducts.map((product,index) => {
            if(cartItems[product.id] > 0){
                return <div key={index}>
            <div className='cart-items-format cart-items-format-main'>
                <img className='cart-item-product-icon' src={product.image} alt='product icon' />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className='cart-items-quantity'>{cartItems[product.id]}</button>
                <p>${product.new_price * cartItems[product.id]}</p>
                <img className='cart-items-remove-icon' onClick={()=> removeFromCart(product.id)} src={removeIcon} alt='' />
            </div>
            <hr />
        </div>
            }
            return null;
        })}
        <div className='cart-items-down'>
            <div className='cart-items-total'>
                <h1>Cart Total</h1>
                <div>
                    <div className='cart-items-total-item'>
                        <p>Subtotal</p>
                        <p>${getTotalValue()}</p>

                        <hr />
                    </div>

                    <div className='cart-items-total-item'>
                        <p>Shipping Fee:</p>
                        <p>Free: </p>
                    </div>

                    <div className='cart-items-total-item'>
                        <h3>Total: </h3>
                        <h3>${getTotalValue()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div> 
            <div className='cart-items-promocode'>
                <p>If you have a promo code then enter it here</p>
                <div className='cart-items-promobox'>
                    <input placeholder='Promo Code' />
                    <button type='submit'>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}
