import Drawer from '../../components/Drawer/'
import { aboutDatas } from '../../datas/about.js'

function About() {
    return (
        <div>
            {aboutDatas.map(({ id, title, description }) =>
					(
						<div key={id}>
                        <Drawer
                        title={title}
                        description={description} />
						</div>
					)
				)}
      </div>
    )
  }
  
  export default About