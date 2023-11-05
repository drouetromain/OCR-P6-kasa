import { Slider } from '../../components/Slider'
import Drawer from '../../components/Drawer'
import Details from '../../components/Details'
import Rating from '../../components/Rating'
import Agent from '../../components/Agent'
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
        // Defaut
        root.style.setProperty('--max-drawer-height', "100%");
        let box = document.querySelectorAll("[class^='drawer-block']");
        let mxHeight = 0;
        box.forEach(element => {
            let height = element.clientHeight; 
            if(mxHeight < height) mxHeight = height;
        });
        // Calcul hauteur mx de la div
        root.style.setProperty('--max-drawer-height', "800px");
    });

    // Redirection vers 404 si id du logement n'existe pas
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
            <div className='logement-infos'>
                <section className='localization'>
                    <Details id={logement?.id || ""} title={logement?.title || ""} location={logement?.location || ""} />
                        <div className="facets">
                            <ul>
                                {tagsArray?.map((tagsArray) =>
                                    <li key={tagsArray}><Facets tags={tagsArray} /></li>
                                )}       
                            </ul>
                        </div>
                </section>
                <section className='rating'>
                    {ratingArray && (<Rating rating={ratingArray} />)}
                    <Agent name={logement?.host.name || ""} picture={logement?.host.picture || ""} />
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