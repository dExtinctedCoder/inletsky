import './_hero.scss'
import Nav from './nav'
import BG from '../pages/home/assets/rm3j73batch2-16-011.png'
import GLOBE from '../pages/home/assets/Group284.png'
import SvgComponent from './svg'
import { BsArrowRight } from 'react-icons/bs'

const Hero = () => {
  const style = {
    backgroundImage: `url(${BG}), url(${GLOBE})`,
    backgroundPosition: 'center, 50% 210px',
    backgroundSize: 'cover, 1000px',
    backgroundRepeat: 'repeat, no-repeat'
  }
  return (
    <section className='hero' style={style}>
      <Nav />
      <div className='hero-typo'>
        <a href="#">Explore what's new with inletsky <BsArrowRight /></a>
        <h2>BrainNet. GL JS</h2>
        <h5>BrainNet. GL JS is a Networking library for vector networking on  the Web. Its performance, real-time styling, and interactivity features set the bar for anyone building fast, immersive tech on the web.</h5>
      </div>
      <div className='hero-scrolldown'>
        <SvgComponent type='arrow-left' />
        <span>Explore Now</span>
      </div>
      <div className='blur'></div>
      <div className='blurbg'></div>
    </section>
  )
}

export default Hero