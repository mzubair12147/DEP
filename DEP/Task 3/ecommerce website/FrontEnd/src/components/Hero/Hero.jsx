import './Hero.css'
import handImage from '../assets/Frontend_Assets/hand_icon.png';
import arrowIcon from '../assets/Frontend_Assets/arrow.png';
import heroImage from '../assets/Frontend_Assets/hero_image.png';

export default function Hero() {
  return (
    <div className="hero">
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hero-handle-icon'>
                    <p>NEW</p>
                    <img src={handImage} alt='hero-image'/>
                </div>

                <p>Collection</p>
                <p> for Everyone</p>
            </div>
            <div className='hero-latest-btn'>
                <div>Latest Collection</div>
                <img src={arrowIcon} alt='arrow icon' />
            </div>
        </div>

        <div className='hero-right'>
            <img src={heroImage} alt='hero image' />
        </div>
    </div>
  )
}
