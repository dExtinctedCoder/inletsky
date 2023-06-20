import Hero from '../../components/hero'
import SvgComponent from '../../components/svg'
import './_home.scss'
import RAY from './assets/Group289.png'
import SKY from './assets/Rectangle130.png'
import GLOBE from './assets/Group290.png'

// component for landing page
const Home = () => {
  const style = {
    backgroundImage: `url(${GLOBE})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
  return (
    <section className='homepage'>
      <Hero />
      <section className='networking'>
        <div className='networking-img'>
          <img src={RAY} alt="" />
        </div>
        <div className='networking-card' style={style}>
          <li><span></span>Product Update</li>
          <h4>3D Networking</h4>
          <p>GL JS is engineered to render even the most detailed, feature-dense maps at 60 FPS on both desktop and mobile devices. </p>
          <a href="#">Explore more →</a>
        </div>
        <div className='networking-img'>
          <img src={SKY} alt="" />
        </div>
      </section>
      <div className='arrowbox'>
        <div><span></span><SvgComponent type='arrow-left' /></div>
        <div><SvgComponent type='arrow-right' /><span></span></div>
      </div>
    </section>
  )
}

export default Home