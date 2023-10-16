import React, { useEffect, useState } from 'react'
import { Slider } from '../../components/Slider'
import Drawer from '../../components/Drawer'
import DrawerList from '../../components/DrawerList'
import Details from '../../components/Details'
import Facets from '../../components/Facets'
import logementsList from '../../datas/logements.json'
import { useParams } from 'react-router-dom';
import '../../assets/style.scss'


function Logements() {
    let { idLogement } = useParams();
    const logement = logementsList.find((logement) => logement.id === idLogement);
    const tagsArray = logement.tags;
    const equipementsArray = logement.equipments;
    const picturesArray = logement.pictures;
    return (
        <main className="block-logement">
            <div>
                <Slider data={picturesArray} />
                {/* <Slider title={logement?.title || ""} cover={logement?.cover || ""} /> */}
            </div>
            <div>
                <Details id={logement?.id || ""} title={logement?.title || ""} cover={logement?.cover || ""} location={logement?.location || ""} name={logement?.host.name || ""} picture={logement?.host.picture || ""} />
                    <section className="facets-rating">
                        <ul>
                            {tagsArray.map((tagsArray) =>
                                <li key={tagsArray}><Facets tags={tagsArray} /></li>
                            )}
                        </ul>
                    </section>
            </div>
            <section className="logement-details">
                <Drawer drawerTitle="Description" content={logement?.description || ""} />
                <div className="drawer-block">
                    <h3>Équipements</h3>
                    <div>
                        {<ul>
                                {equipementsArray.map((equipementsArray) =>
                                    <li key={equipementsArray}><DrawerList equipments={equipementsArray} /></li>
                                )}
                        </ul>}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Logements