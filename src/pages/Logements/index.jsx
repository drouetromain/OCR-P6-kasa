import { Slider } from '../../components/Slider'
import Drawer from '../../components/Drawer'
import DrawerList from '../../components/DrawerList'
import Details from '../../components/Details'
import Rating from '../../components/Rating'
import Facets from '../../components/Facets'
import logementsList from '../../datas/logements.json'
import { useParams } from 'react-router-dom';
import '../../assets/style.scss'
import { useEffect, useState } from 'react';


function Logements() {

    const [open, setOpen] = useState(true);

    let { idLogement } = useParams();
    const logement = logementsList.find((logement) => logement.id === idLogement);
    if (logement === undefined) {
        console.log("id inexistant");
        // <Routes>
        //     <Route path="*" element={<Error />} />
        // </Routes>
    };
    const tagsArray = logement.tags;
    const picturesArray = logement.pictures;
    const ratingArray = logement.rating;

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
    // root.style.setProperty('--max-drawer-height', mxHeight + "px");
    // setOpen(false)
  }, [open]);

    return (
        <main className="block-logement">
            <div>
                <Slider data={picturesArray} />
            </div>
            <div>
                <Details id={logement?.id || ""} title={logement?.title || ""} cover={logement?.cover || ""} location={logement?.location || ""} name={logement?.host.name || ""} picture={logement?.host.picture || ""} />
                    <section className="facets-rating">
                        <ul>
                            {tagsArray.map((tagsArray) =>
                                <li key={tagsArray}><Facets tags={tagsArray} /></li>
                             )}       
                        </ul>
                        <div> 
                        <Rating rating={ratingArray} />
                        </div>
                    </section>
            </div>
            <section className="logement-details">
                <Drawer isOpen={open} drawerTitle="Description" content={logement?.description || ""} />
                <Drawer isOpen={open} drawerTitle="Equipements" equipementsArray={ logement.equipments } />
                {/* <DrawerList drawerTitle="Equipements" equipementsArray={ logement.equipments } /> */}
                {/* <div className="drawer-block">
                    <h3>Équipements</h3>
                    <div>
                        {<ul>
                                {equipementsArray.map((equipementsArray) =>
                                    <li key={equipementsArray}><DrawerList equipments={equipementsArray} /></li>
                                )}
                        </ul>}
                    </div>
                </div> */}
            </section>
        </main>
    )
}

export default Logements