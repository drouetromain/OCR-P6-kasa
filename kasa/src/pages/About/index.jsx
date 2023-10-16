import Drawer from '../../components/Drawer/'
import Hero from '../../components/Hero/'
import { aboutDatas } from '../../datas/about.js'
import '../../assets/style.scss'

function About() {
    return (
        <div>
            <Hero />
            {aboutDatas.map(({ id, title, description }) =>
					(
						<div key={id}>
                        <Drawer
                        drawerTitle={title}
                        content={description} />
						</div>
					)
				)}
      </div>
    )
  }
  
  export default About