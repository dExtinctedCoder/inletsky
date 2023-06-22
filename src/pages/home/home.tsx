import Hero from '../../components/hero'
import SvgComponent from '../../components/svg'
import Section from '../../components/section'
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
import IMPOSSIBLE from './assets/imps.png'
import DESIGN from './assets/Rectangle135design.png'
import NAVIGATION from './assets/Rectangle136nav.png'
import STUDIO from './assets/Rectangle136studio.png'
import MAPS from './assets/Rectangle136maps.png'
import SEARCH from './assets/Rectangle135search.png'
import VISION from './assets/Rectangle136vision.png'
import DATA from './assets/Rectangle135data.png'
import ATLAS from './assets/Rectangle136atlas.png'
import LINE from './assets/Vector42rmap.png'
import USER from './assets/Ellipse47dp.png'
import Faqs from '../../components/faqs'

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
      <section className='sectionbox' style={{ backgroundImage: `url(${LINE})` }}>
        <Section btn='Design without limits' title='Design' text='Style your map with lines, polygons, labels, icons, patterns, extrusions, raster & terrain with hundreds of options and a powerful expression language, not only controlling all visual aspects through the zoom range but having the freedom to change them at any time dynamically.' link='Learn more about design  →' direction='row' align='flex-start' bg={DESIGN} alt=''></Section>
        <Section btn='Design without limits' title='Navigation' text='Inletsky provides powerful routing engines, accurate, traffic-powered travel times, and intuitive turn-by-turn directions to help you build engaging navigation experiences.' link='more about navigate  →' direction='row-reverse' align='flex-end' bg={NAVIGATION} alt=''></Section>
        <Section btn="See what's inside our studio" title='Studio' text='Inletsky Studio is like Photoshop, for maps. We give designers control over everything from colors and fonts, to 3D features and camera angles, to the pitch of the map as a car enters a turn.' link='know more about design  →' direction='row' align='flex-start' bg={STUDIO} alt=''></Section>
        <Section btn='Experience our maps' title='Maps' text='Our APIs, SDKs, and live updating map data give developers tools to build better mapping, navigation, and search experiences across platforms.' link='more about maps  →' direction='row-reverse' align='flex-end' bg={MAPS} alt=''></Section>
        <Section btn='Tell us what to explore' title='Search' text='Search and geocoding is tied to everything we build — maps, navigation, AR — and underlies every app that helps humans explore their world.' link='discover search  →' direction='row' align='flex-start' bg={SEARCH} alt=''></Section>
        <section className='testimonials'>
          <li><span></span>Tell us what to explore</li>
          <h2>Testimonials</h2>
          <p>Search and geocoding is tied to everything we build — maps, navigation, AR — and underlies every app that helps humans explore their world.</p>
          <div className='testimonials-cardbox'>
            <div>
              <div className='testimonials-cardbox--card'>
                <div className='testimonials-cardbox--card-info'>
                  <img src={USER} alt="user-dp" />
                  <span>Joe Smith</span>
                </div>
                <p>global community is proof that you can be a successful freelancer no matter where you live. Collaborate, network,</p>
                <div className='testimonials-cardbox--card-rating'>
                  <SvgComponent type='star-full' />
                  <SvgComponent type='star-full' />
                  <SvgComponent type='star-full' />
                  <SvgComponent type='star-full' />
                  <SvgComponent type='star-outline' />
                </div>
              </div>
              <div className='testimonials-cardbox--card'>
                <div className='testimonials-cardbox--card-info'>
                  <img src={USER} alt="user-dp" />
                  <span>Joe Smith</span>
                </div>
                <p>global community is proof that you can be a successful freelancer no matter where you live. Collaborate, network,</p>
                <div className='testimonials-cardbox--card-rating'>
                  <SvgComponent type='star-full' />
                  <SvgComponent type='star-full' />
                  <SvgComponent type='star-full' />
                  <SvgComponent type='star-full' />
                  <SvgComponent type='star-outline' />
                </div>
              </div>
              <div className='testimonials-cardbox--card'>
                <div className='testimonials-cardbox--card-info'>
                  <img src={USER} alt="user-dp" />
                  <span>Joe Smith</span>
                </div>
                <p>global community is proof that you can be a successful freelancer no matter where you live. Collaborate, network,</p>
                <div className='testimonials-cardbox--card-rating'>
                  <SvgComponent type='star-full' />
                  <SvgComponent type='star-full' />
                  <SvgComponent type='star-full' />
                  <SvgComponent type='star-full' />
                  <SvgComponent type='star-outline' />
                </div>
              </div>
              {/* <div className='testimonials-cardbox--card'>
                <div className='testimonials-cardbox--card-info'>
                  <img src={USER} alt="user-dp" />
                  <span>Joe Smith</span>
                </div>
                <p>global community is proof that you can be a successful freelancer no matter where you live. Collaborate, network,</p>
                <div className='testimonials-cardbox--card-rating'>
                  <SvgComponent type='star-full' />
                  <SvgComponent type='star-full' />
                  <SvgComponent type='star-full' />
                  <SvgComponent type='star-full' />
                  <SvgComponent type='star-outline' />
                </div>
              </div>
              <div className='testimonials-cardbox--card'>
                <div className='testimonials-cardbox--card-info'>
                  <img src={USER} alt="user-dp" />
                  <span>Joe Smith</span>
                </div>
                <p>global community is proof that you can be a successful freelancer no matter where you live. Collaborate, network,</p>
                <div className='testimonials-cardbox--card-rating'>
                  <SvgComponent type='star-full' />
                  <SvgComponent type='star-full' />
                  <SvgComponent type='star-full' />
                  <SvgComponent type='star-full' />
                  <SvgComponent type='star-outline' />
                </div>
              </div>
              <div className='testimonials-cardbox--card'>
                <div className='testimonials-cardbox--card-info'>
                  <img src={USER} alt="user-dp" />
                  <span>Joe Smith</span>
                </div>
                <p>global community is proof that you can be a successful freelancer no matter where you live. Collaborate, network,</p>
                <div className='testimonials-cardbox--card-rating'>
                  <SvgComponent type='star-full' />
                  <SvgComponent type='star-full' />
                  <SvgComponent type='star-full' />
                  <SvgComponent type='star-full' />
                  <SvgComponent type='star-outline' />
                </div>
              </div> */}
            </div>
          </div>
          <div className='arrowbox'>
            <div><span></span><SvgComponent type='arrow-left' /></div>
            <div><SvgComponent type='arrow-right' /><span></span></div>
          </div>
        </section>
        <Section btn='The vision behind Inletsky' title='Vision' text="The Inletsky Vision SDK describes every curb, lane, street sign, and road hazard it sees as data. Developers use the SDK's AI-powered semantic segmentation, object detection, and classification to deliver precise navigation guidance, display driver assistance alerts, and detect and map road incidents." link='Discover Vision  →' direction='row-reverse' align='flex-end' bg={VISION} alt='vision'></Section>
        <Section btn="Your data is our responsibility" title='Data' text='Our data is powered by hundreds of data sources, and a distributed global users base of more than half a billion monthly active users.' link='more about data  →' direction='row' align='flex-start' bg={DATA} alt='data'></Section>
        <Section btn='Our Newest Product' title='Atlas' text='With Atlas, you can self-host Inletsky maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Inletsky Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using Inletsky GL JS v2 and Inletsky Maps SDKs for iOS and Android.' link='Try atlas  →' direction='row-reverse' align='flex-end' bg={ATLAS} alt='atlas'></Section>
      </section>
      <Faqs />
    </section>
  )
}

export default Home