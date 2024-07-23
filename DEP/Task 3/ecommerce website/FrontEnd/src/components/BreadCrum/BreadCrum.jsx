import './BreadCrum.css';
import arrowIcon from '../assets/Frontend_Assets/breadcrum_arrow.png'
export default function BreadCrum(props) {
    const {product} = props;
  return (
    <div className='breadcrum'>
        Home
        <img src={arrowIcon} alt='arrow icon' />
        Shop 
        <img src={arrowIcon} alt='arrow icon' />
        {product.category}
        <img src={arrowIcon} alt='arrow icon' />
        {product.name}
    </div>
  )
}
