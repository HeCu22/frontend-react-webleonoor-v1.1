import React from 'react';
import './Portretdetails.css';
import Mainnavcomp from "../../components/mainnav/Mainnavcomp";
import Article from "../../components/article/Article";
import portret from "../../assets/images/jongensportret.jpg";

function Portretdetails(props) {
    return (
        <>
            <Mainnavcomp
                keuze="portretten"/>
            <main className="outer-container impression-nieuws-details">
                <div className="inner-container">
                    <div className="outer-row">
                        <div className="mid">
                            <div className="tile">
                                <h1>Portretten</h1>
                                <h5>realistisch of fantasie....</h5>
                                <h5>het kwetsbare van de mens weergeven, of juist diens kracht.</h5>
                                <p>Een portret naar model kan opgestart worden in initële sessies van twee uur en geeft meestal een heel levendig resultaat.</p>

                            </div>
                        </div>


                    </div>
                </div>
            </main>
            <main className="outer-container main-background">
                <div className="inner-container">
                    <div className="tiles">
                        <div className="tilefirst">
                            <h2>Naar model of via fotomateriaal</h2>
                            <p>
                                De werkelijkheid geeft een driedimensionaal beeld van het uiterlijk en de
                                energie en manier van bewegen van de persoon.
                            </p>
                            <p>Een benadering hiervan is vast te leggen via
                                meerdere foto's.
                            </p>
                        </div>
                        <div className="tile">
                            <Article
                                fieldclass="card-portrait"
                                tag="portretten"
                                image={portret}
                                title="portret naar model"
                                description="van een jongen in zijn thuisomgeving"
                            />

                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Portretdetails;