import './_nav.scss'
import LOGO from '../../public/assets/Layer 2logo.png'
import { BsChevronDown } from 'react-icons/bs'
import { BiMenuAltRight } from 'react-icons/bi'

const Nav = () => {
  return (
    <section className='navbar'>
      <div className='logobox'><img src={LOGO} alt="inletsky" /></div>
      <nav>
        <span tabIndex={0}>SOLUTIONS <BsChevronDown fontSize={15} fontWeight={500} /></span>
        <span tabIndex={0}>DEVELOPERS <BsChevronDown fontSize={15} fontWeight={500} /></span>
        <span tabIndex={0}>CUSTOMERS</span>
        <span tabIndex={0}>BLOG</span>
      </nav>
      <div className='ctabox'>
        <a href="#">Login</a>
        <a href="#">Signup</a>
      </div>
      <BiMenuAltRight className='hamburger' fontSize={36} />
    </section>
  )
}

export default Nav