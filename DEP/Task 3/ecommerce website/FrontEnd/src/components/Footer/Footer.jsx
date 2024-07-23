import './Footer.css';
import footerLogo from '../assets/Frontend_Assets/logo.png'
import instagramIcon from '../assets/Frontend_Assets/instagram_icon.png'
import pintesterIcon from '../assets/Frontend_Assets/pintester_icon.png'
import whatsappIcon from '../assets/Frontend_Assets/whatsapp_icon.png'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footerLogo} alt='footer logo' />
            <p>Orion</p>
        </div>

        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div className='footer-social-icons'>
            <div className='footer-icons-container'><img src={instagramIcon} alt='instagram icon' /></div>
            <div className='footer-icons-container'><img src={whatsappIcon} alt='whatsapp icon' /></div>
            <div className='footer-icons-container'><img src={pintesterIcon} alt='pintester icon' /></div>
        </div>

        <div className='footer-copyright'>
            <hr />
            <p>Copyright @ {new Date().getFullYear()} - All Rights Reserved</p>
        </div>
    </div>
  )
}
