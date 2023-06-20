import Hero from '../../components/hero'
import SvgComponent from '../../components/svg'
import './_home.scss'
import RAY from './assets/Group289.png'
import SKY from './assets/Rectangle130.png'
import GLOBE from './assets/Group290.png'

import NewYorkTimes from './assets/TNYT.png'
import KFC from './assets/kfc.png'
import CNN from './assets/cnn.png'
import WordPress from './assets/wordpress.png'
import YAHOO from './assets/yahoo.png'
import UNESCO from './assets/unesco.png'
import TABLEUA from './assets/tableau.png'
import TheWeatherChannel from './assets/twc.png'
import ESPN from './assets/espn.png'
import FC from './assets/fc.png'
import AllTrails from './assets/alltrails.png'
import OneSoil from './assets/onesoil.png'
import ReiCoop from './assets/rei.png'
import ANCESTRY from './assets/ancestry.png'
import IMPOSSIBLE from './assets/vector.png'

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
      <section className='ourclients'>
        <li><span></span>Trusted by the industry leaders</li>
        <h2>Our Clients</h2>
        <div>
          <div><img src={NewYorkTimes} alt=''></img></div>
          <div><img src={YAHOO} alt=''></img></div>
          <div><img src={TABLEUA} alt=''></img></div>
          <div><img src={IMPOSSIBLE} alt=''></img></div>
          <div><img src={UNESCO} alt=''></img></div>
          <div><img src={KFC} alt=''></img></div>
          <div><img src={CNN} alt=''></img></div>
          <div><img src={WordPress} alt=''></img></div>
          <div><img src={TheWeatherChannel} alt=''></img></div>
          <div><img src={ESPN} alt=''></img></div>
          <div><img src={FC} alt=''></img></div>
          <div><img src={ANCESTRY} alt=''></img></div>
          <div><img src={OneSoil} alt=''></img></div>
          <div><img src={ReiCoop} alt=''></img></div>
          <div><img src={AllTrails} alt=''></img></div>
        </div>
        <a href="#">View customers stories →</a>
      </section>
    </section>
  )
}

export default Home