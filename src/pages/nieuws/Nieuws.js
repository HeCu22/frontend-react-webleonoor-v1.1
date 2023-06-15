import React from 'react';
import './Nieuws.css';
import Mainnavcomp from "../../components/mainnav/Mainnavcomp";
import Article from "../../components/article/Article";
import bloemfoto from "../../assets/images/foto_van_bloem.png";
import bloem from "../../assets/images/flower.jpg";
import kat from "../../assets/images/kat.png";
import collage from "../../assets/images/compostie_kasteel.png";
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
                                <h5>bloemen, dieren, symbolen</h5>
                                <h5>als decoratie of illustratie</h5>
                                <p>Als hoofdonderwerp of in de achtergrond. Letters en symbolen kunnen het thema benadrukken</p>

                            </div>
                        </div>


                    </div>
                </div>
            </main>
            <main className="outer-container main-background">
                <div className="inner-container">
                    <div className="tiles">
                        <div className="tilefirst">
                            <h2>Bloemen</h2>
                            <p>
                                Bloemen kunnen als onderwerp dienen of als onderdeel van een schilderij
                            </p>
                            <p>Hier heb ik eerst een schets gemaakt en wat kleur toegevoegd in de achtergrond
                            </p>
                        </div>
                        <div className="tile">
                            <Article
                                fieldclass="card-portrait"
                                tag="bloemen"
                                image={bloemfoto}
                                title="foto van bloemen"
                                description="als basis of onderdeel van een schilderij"
                                />
                        </div>
                        <div className="tile">
                            <Article
                                fieldclass="card-portrait"
                                tag="bloemen"
                                image={bloem}
                                title="bloem"
                                description="tekening en voorschildering"
                            />
                        </div>
                        <div className="tilefirst">
                            <h2>Dieren en kasteelmuren</h2>
                            <p>
                                Kasteelmuren met doorkijkjes en dieren die ineens verschijnen
                            </p>
                            <p>De compositie heb ik opgezet via een collage van foto's en tekeningen
                            </p>
                        </div>
                        <div className="tile">
                            <Article
                                fieldclass="card-portrait"
                                tag="dieren"
                                image={kat}
                                title="avatar"
                                description="foto van een kat in twee kleuren"
                            />
                        </div>


                        <div className="tile">
                            <Article
                                fieldclass="card-portrait"
                                tag="kastelen"
                                image={collage}
                                title="collage kasteel"
                                description="als entourage dieren en stenen muren"
                            />
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}

export default Nieuws;