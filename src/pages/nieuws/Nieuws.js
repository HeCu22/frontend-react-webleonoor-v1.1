import React from 'react';
import './Nieuws.css';
import Mainnavcomp from "../../components/mainnav/Mainnavcomp";
import Article from "../../components/article/Article";
import plant from "../../assets/images/planten.jpg";
import gevel from "../../assets/images/gevel.jpg";
import kat from "../../assets/images/kat.png";
import catlady from "../../assets/images/catlady.jpg";

function Nieuws(props) {
    return (
        <>
            <Mainnavcomp keuze="nieuws"
            />
            <main className="outer-container impression-nieuws-details">
                <div className="inner-container">
                    <div className="outer-row">
                        <div className="mid">
                            <div className="tile">
                                <h1>Nieuw thema's</h1>
                                <h5>Planten, gevels, kastelen</h5>
                                <h5>als decoratie of illustratie</h5>
                                <p>Als hoofdonderwerp of in de achtergrond. </p>

                            </div>
                        </div>


                    </div>
                </div>
            </main>
            <main className="outer-container main-background">
                <div className="inner-container">
                    <div className="tiles">

                        <div className="tilefirst">
                            <h2>Kasteelmuren en doorkijkjes</h2>
                            <p>
                                Kasteelmuren, poorten en raamopeningen en dieren die ineens verschijnen.
                            </p>
                            <p>De compositie heb ik opgezet via een collage van foto's en tekeningen.
                            </p>
                        </div>


                        <div className="tile">
                            <Article
                                fieldclass="card-portrait"
                                tag="kasteelmuren"
                                image={catlady}
                                title="Dame met kat"
                                description="50x70 acryl op papier"
                            />
                        </div>
                        <div className="tile">
                            <Article
                                fieldclass="card-portrait"
                                tag="dieren"
                                image={kat}
                                title="Avatar"
                                description="foto van een kat in twee kleuren"
                            />
                        </div>


                        <div className="tile">
                            <Article
                                fieldclass="card-portrait"
                                tag="gevels"
                                image={gevel}
                                title="Gevel met kleur"
                                description="50x70 acryl op papier"
                            />
                        </div>
                        <div className="tilefirst">
                            <h2>Gevels</h2>
                            <p>
                                Planten en gevels kunnen als onderwerp dienen of als onderdeel van een schilderij.
                            </p>
                            <p> Gevels kunnen in allerlei kleuren geschilderd worden. Planten verkleuren van groen naar geel en rood tot bruin in de herfst.
                            </p>
                        </div>
                        <div className="tile">
                            <Article
                                fieldclass="card-portrait"
                                tag="planten"
                                image={plant}
                                title="Planten en bladeren"
                                description="50x70 acryl op papier"
                            />
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}

export default Nieuws;