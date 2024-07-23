import './Offers.css'
import exclusiveImage from '../assets/Frontend_Assets/exclusive_image.png';
export default function Offers() {
  return (
    <div className='offers'>
    <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>Only our best sellers product</p>
        <button>Check Now</button>
    </div>
    <div className='offers-right'>
        <img src={exclusiveImage} alt='exclusive-image' />
    </div>
    </div>
  )
}
