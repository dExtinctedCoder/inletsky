import './_footer.scss'
import LOGO from '../../public/assets/Layer 2logo.png'
import { FaGithubAlt, FaTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

// footer section component
const Footer = () => {
  return (
    <footer>
      <div className='control'>
        <div>
          <img src={LOGO} alt="inletsky" />
        </div>
        <ul>
          <ul>
            <h5>PRODUCTS</h5>
            <li><a href="#">Fleet</a></li>
            <li><a href="#">Address Autofill</a></li>
            <li><a href="#">Navigation SDK</a></li>
            <li><a href="#">Dash</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">Maps</a></li>
            <li><a href="#">Mobile Maps SDK</a></li>
            <li><a href="#">Studio</a></li>
            <li><a href="#">Data</a></li>
            <li><a href="#">Vision</a></li>
            <li><a href="#">Atlas</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
          <ul>
            <h5>RESOURCES</h5>
            <li><a href="#">Industries</a></li>
            <li><a href="#">Use Cases</a></li>
            <li><a href="#">How-to Videos</a></li>
            <li><a href="#">Webinars</a></li>
            <li><a href="#">Events</a></li>
          </ul>
          <ul>
            <h5>SUPPORT</h5>
            <li><a href="#">Support Services</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Open source</a></li>
          </ul>
          <ul>
            <h5>COMPANY</h5>
            <li><a href="#">About</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Diversity & Inclusion</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Prices</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </ul>
      </div>
      <div>
        <nav>
          <span>&copy; Inletsky</span>
          <a href="">Terms</a>
          <a href="">Privacy</a>
          <a href="">Security</a>
        </nav>
        <div className='footer-socials'>
          <a href=""><FaGithubAlt /></a>
          <a href=""><FaTwitter /></a>
          <a href=""><FaLinkedinIn /></a>
          <a href=""><FaFacebookF /></a>
          <a href=""><AiFillInstagram /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer