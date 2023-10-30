import Drawer from '../../components/Drawer/'
import Hero from '../../components/Hero/'
import { aboutDatas } from '../../datas/about.js'
import '../../assets/style.scss'
import ImgHeroAbout from '../../assets/hero-about.webp'

function About() {
    return (
        <div>
            <Hero heroTitle="" bgImg={ImgHeroAbout} altImg="Montagnes" />
            <section className='about-block'>
            {aboutDatas.map(({ id, title, description }) =>
					(
						<div key={id}>
                        <Drawer
                        drawerTitle={title}
                        content={description} />
						</div>
					)
                )}
            </section>
      </div>
    )
  }
  
  export default About