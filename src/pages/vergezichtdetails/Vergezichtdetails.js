import React from 'react';
import './Vergezichtdetails.css';
import Mainnavcomp from "../../components/mainnav/Mainnavcomp";
import mirepoix from "../../assets/images/mirepoix.jpg";
import skischoenen from "../../assets/images/skischoenen0001.jpg";
import landschap from "../../assets/images/foto_van_landschap.jpg";
import heidelandschap from "../../assets/images/heath_ground.jpg";
import Article from "../../components/article/Article";
function Vergezichtdetails(props) {
    return (
        <>
            <Mainnavcomp
            keuze = "vergezichten"/>
            <main className="outer-container impression-print-details">
                <div className="inner-container">
                    <div className="outer-row">
                        <div className="mid">
                            <div className="tile">
                                <h1>Vergezicht en blikveld</h1>
                                <h2>Schetsen, prints</h2>
                                <h3>dichtbij of veraf</h3>
                                <h5>Stilleven of landschap</h5>
                                <p>Struktuur en vorm, oude gebouwen en sfeerbeelden.
                                    Dit is te realiseren in zwart/wit tekeningen  prints en/of kleurcontrasten.
                                    </p>

                            </div>
                        </div>


                    </div>
                </div>
            </main>
            <main className="outer-container main-background">
                <div className="inner-container">
                    <div className="tiles">
                        <div className="tilefirst">
                            <h2>Prints</h2>
                            <p> Gebouwen gedrukt of opgesierd in blockprint.
                                Met Oost-Indische inkt kunnen details uitgewerkt worden.
                                De blockprints die op deze site staan zijn met witte of zwarte blokprint gemaakt,
                                Kleurvlakken zijn met acrylverf gemaakt.
                                Herinnering, nostalgie, romantiek, avontuur of melancholie om de energie weer op te laden.
                            </p>
                        </div>
                        <div className="tile">
                            <Article
                                fieldclass="card-portrait"
                                tag="prints"
                                image={mirepoix}
                                title="foto van Mirepoix"
                                description="inspiratie voor 'Castle'"
                            />

                        </div>
                        <div className="tile">
                            <Article
                                fieldclass="card-portrait"
                                tag="prints"
                                image={skischoenen}
                                title="foto van skischoenen"
                                description="inspiratie voor 'Snow Boots'"
                            />

                        </div>
                        <div className="tilefirst">
                            <h2>Vergezichten</h2>
                            <p> Met aquarel maak je mooie vergezichten. Aan de hand van foto's tijdens een wandeling bijvoorbeeld.
                                Of met houtskool in zwart/wit, buiten, in de natuur.
                            </p>
                        </div>
                        <div className="tile">
                            <Article
                                fieldclass="card-portrait"
                                tag="vergezichten"
                                image={landschap}
                                title="foto van landschap"
                                description="inspiratie voor butientekening"
                            />
                        </div>
                        <div className="tile">
                            <Article
                                fieldclass="card-portrait"
                                tag="vergezichten"
                                image={heidelandschap}
                                title="aquarel op papier"
                                description="na wandeling in de natuur"/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Vergezichtdetails;