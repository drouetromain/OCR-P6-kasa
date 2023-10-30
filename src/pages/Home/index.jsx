import { Link } from 'react-router-dom'
import Card from '../../components/Card/'
import Hero from '../../components/Hero/'
import logementsList from '../../datas/logements.json'
import ImgHeroHome from '../../assets/hero-home.webp'
import '../../assets/style.scss'

function Home() {
    return (
        <section>
            <Hero heroTitle="Chez vous, partout et ailleurs" bgImg={ImgHeroHome} altImg="Bord de mer rocailleux" />
            <div id="block-home">
                <div className="row">
                    {logementsList.map(({ id, title, cover }) =>
                    (
                        <div className="col-33" key={id}>
                            <Link to={{ pathname: `/logement/${id}` }}>
                                <Card title={title} cover={cover} />
                            </Link>
                        </div>
                    )
                    )}
                </div>
            </div>
        </section>
    )
}

export default Home