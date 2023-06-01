import React from 'react';
import './Cultdetails.css';
import Mainnavcomp from "../../components/mainnav/Mainnavcomp";
import Article from "../../components/article/Article";
import berbermeisje from "../../assets/images/berbermeisje.jpg";
import dameinjurk from "../../assets/images/foto_dame_in_jurk.jpg";

function Cultdetails(props) {
    return (
        <>
            <Mainnavcomp
                keuze="culturemix"/>
            <main className="outer-container impression-cult-details">
                <div className="inner-container">
                    <div className="outer-row">
                        <div className="mid">
                            <div className="tile">
                                <h1>Culturen en Mysterie</h1>
                                <h2>Sprookjes, prinsen, prinsessen</h2>
                                <h3>droom en fantasie</h3>
                                <h5>Afrikaans, Arabisch, Marokkaans....gesluierd of gemaskeerd</h5>
                                <p>Geïnspireerd op fotoportretten, huidversieringen en vreemde culturen.
                                    Versluiering, opsiering en vele decoraties heb ik meestal in printstructuren
                                    uitgewerkt.
                                    Dit geeft naast gedempte kleurencombinaties, een nog meer mysterieuze sfeer.</p>

                            </div>
                        </div>


                    </div>
                </div>
            </main>
            <main className="outer-container main-background">
                <div className="inner-container">
                    <div className="tiles">
                        <div className="tilefirst">
                            <h2>Fotoportretten</h2>
                            <p>Als basis van een portret kan een goede foto het uitgangspunt zijn.
                            </p>
                            <p>
                                Een eerste kennismaking in eigen omgeving geeft een goed beeld van het uiterlijk en de
                                karaktertrekken van de persoon.
                            </p>
                            <p>Een alternatief is om een karakteromschrijving te maken en te illustreren met één of
                                meer foto's.
                            </p>
                        </div>
                        <div className="tile">
                            <Article
                                fieldclass="card-portrait"
                                tag="culturemix"
                                image={berbermeisje}
                                title="foto van berbermeisje"
                                description="inspiratie voor 'marokkaanse bruid'"
                            />

                        </div>
                        <div className="tile">
                            <Article
                                fieldclass="card-portrait"
                                tag="sprookjes"
                                image={dameinjurk}
                                title="foto dame in mooie jurk"
                                description="inspiratie voor 'Dame in kostuum'"
                            />

                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Cultdetails;