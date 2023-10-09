import Card from '../../components/Card/'
import logementsList from '../../datas/logements.json'
import '../../assets/style.scss'

function Home() {
    return (
        <section>
            <div id="block-home">
                <div class="row">
                    {logementsList.map(({ id, title, cover }) =>
                        (
                            <div class="col-33" key={id}>
                            <Card
                                title={title}
                                cover={cover} />
                            </div>
                        )
                    )}
                </div>
            </div>
      </section>
    )
}
  
export default Home