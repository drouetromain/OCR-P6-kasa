import { Slider } from '../../components/Slider'
import Drawer from '../../components/Drawer'
import Details from '../../components/Details'
import Rating from '../../components/Rating'
import Facets from '../../components/Facets'
import logementsList from '../../datas/logements.json'
import '../../assets/style.scss'
import { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";


function Logements() {
    const navigate = useNavigate();
    let { idLogement } = useParams();
    const logement = logementsList.find((logement) => logement?.id === idLogement);
    const tagsArray = logement?.tags;
    const picturesArray = logement?.pictures;
    const ratingArray = logement?.rating;

    // 
    useEffect(() => {
        let root = document.documentElement;
        // Default
        root.style.setProperty('--max-drawer-height', "100%");
        let box = document.querySelectorAll("[class^='drawer-block']");
        let mxHeight = 0;
        box.forEach(element => {
            let height = element.clientHeight; 
            if(mxHeight < height) mxHeight = height;
        });
        // Computed max height
        root.style.setProperty('--max-drawer-height', "800px");
    });

    // 
    useEffect(() => {
        if (logement === undefined) {
            console.log("id inexistant");
            navigate('/404');
        };
    });

    if (logement === undefined) {
        return <></>;
    }

    return (
        <main className="block-logement">
            <div>
                <Slider data={picturesArray} />
            </div>
            <div>
                <Details id={logement?.id || ""} title={logement?.title || ""} cover={logement?.cover || ""} location={logement?.location || ""} name={logement?.host.name || ""} picture={logement?.host.picture || ""} />
                    <section className="facets-rating">
                        <ul>
                            {tagsArray?.map((tagsArray) =>
                                <li key={tagsArray}><Facets tags={tagsArray} /></li>
                             )}       
                        </ul>
                        <div> 
                            {ratingArray && (<Rating rating={ratingArray} />)}
                        </div>
                    </section>
            </div>
            <section className="logement-details">
                <Drawer drawerTitle="Description" content={logement?.description || ""} />
                <Drawer drawerTitle="Equipements" equipementsArray={ logement?.equipments } />
            </section>
        </main>
    )
}

export default Logements