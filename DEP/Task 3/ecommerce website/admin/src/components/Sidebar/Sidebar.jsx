import './Sidebar.css';
import {Link} from 'react-router-dom';
import cartImage from '../../assets/Product_Cart.svg';
import listProductImage from '../../assets/Product_list_icon.svg';
export default function Sidebar() {
  return (
    <div className="side-bar">
        <Link to='/add-product' style={{textDecoration:"none"}}>
            <div className='side-bar-item' >
                <img src={cartImage} alt='' />
                <p>Add Product</p>
            </div>
        </Link>

        <Link to='/list-product' style={{textDecoration:"none"}}>
            <div className='side-bar-item' >
                <img src={listProductImage} alt='' />
                <p>Product List</p>
            </div>
        </Link>
    </div>
  )
}
