import React from 'react';
import './Sterdetails.css';
import Mainnavcomp from "../../components/mainnav/Mainnavcomp";
import Article from "../../components/article/Article";
import lorencompositie from "../../assets/images/loren_compositie.jpg";
import jamesdeancompositie from "../../assets/images/jamesdean_off_stage.jpg";


function Sterdetails(props) {
    return (
        <>
            <Mainnavcomp
                keuze="sterren"/>
            <main className="outer-container impression-ster-details">
                <div className="inner-container">
                    <div className="outer-row">
                        <div className="mid">
                            <div className="tile">
                                <h1>Sterren</h1>
                                <h5>Sterren in de schijnwerpers....</h5>
                                <h5>het wereldtheater</h5>
                                <p>De films of muziek waar we van houden geven mede een indicatie van wie we zijn. Door een
                                    schilderij in lagen op te bouwen creëer je een context of een verhaal</p>

                            </div>
                        </div>


                    </div>
                </div>
            </main>
            <main className="outer-container main-background">
                <div className="inner-container">
                    <div className="tiles">
                        <div className="tilefirst">
                            <h2>Collage van foto's</h2>
                            <p>
                                De dagelijkse omgeving geeft een beeld van het uiterlijk en de
                                karaktertrekken van de persoon.
                            </p>
                            <p>Een karakteromschrijving is te illustreren met één of
                                meer foto's.
                            </p>
                        </div>
                        <div className="tile">
                            <Article
                                fieldclass="card-portrait"
                                tag="sterren"
                                image={lorencompositie}
                                title="collage met foto van Sofia Loren"
                                description="en foto's van Italië op de achtergrond"
                            />

                        </div>
                        <div className="tile">
                            <Article
                                fieldclass="card-portrait"
                                tag="jamesdean"
                                image={jamesdeancompositie}
                                title="collage James Dean"
                                description="met foto's van auto's en pentekeningen op de achtergrond"
                            />

                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}

export default Sterdetails;
