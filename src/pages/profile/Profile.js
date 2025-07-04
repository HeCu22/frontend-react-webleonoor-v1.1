import React from 'react';
import './Profile.css';
import {Link} from "react-router-dom";
import profielfoto from "../../assets/hecu_avatar.png";
import pdf from "../../assets/resume.pdf";
import Mainnavcomp from "../../components/mainnav/Mainnavcomp";

function Profile(props) {
    return (
        <>
            <Mainnavcomp
                keuze="profile"
            />



            <main className="outer-container main-background-profile">
                <div className="inner-container">
                    {/*<div className="outer-row">*/}

                    <div className="mid-profile">
                        <h1>Profiel Pagina</h1>

                        <div className="space">
                            <span className="picture-span"><img className="profile-picture-space" src={profielfoto}
                                                                alt="profiel foto"/></span>
                            <section className="text-space">
                                <h1>About me</h1>
                                <p><strong>name:</strong> Helga Cuijpers</p>
                                <p><strong>Email:</strong> webleonoor@gmail.com </p>
                                <h3>Ambitie:</h3>
                                <p>
                                    Gedurende werk en studie heb ik tussentijds cursussen tekenen/schilderen gevolgd en geëxperimenteerd met
                                    verschillende technieken. <br/>
                                    Sinds 2020 ben ik met meer regelmaat bezig met tekenen of schilderen.<br/>

                                    Komende vijf jaar hoop ik nog meer tijd te kunnen besteden aan creatieve hobby's vanuit huis. </p>
                                <p>
                                    Samen met medecursisten van een schildercursus heb ik een expositie gegeven van de eindresultaten.
                                    Eén schilderij heb ik toen verkocht en één opgehangen in de huiskamer van mijn ouders. <br/>
                                    Tegelijkertijd maakte ik toen een website om mijn hele portfolio te presenteren.
                                </p>

                                <p>
                                    In 2015 en 2016 volgde ik portret- en modeltekencursussen en in 2018 een korte cursus hand-lettering. <br/>
                                    Dat is natuurlijk inspirerend en die vind ik ook in filmseries met mooi beelden en in boeken van kunstschilders zoals Bernd Klimmer, José María Parramón, Lorena Kloosterboer, Lexi Sundell, Gill Barron en Marilyn Scott.
                                </p>

                                <p>
                                    In 2022 en 2023 had ik de tijd om mijn website te moderniseren en aan te vullen. <br/>
                                    Ik heb toen een cursus html en webdevelopment bij Novi Hogeschool gevolgd om mijn website
                                    er volgens de laatste trends en eisen uit te laten zien. <br/>
                                    In 2024 ben ik lid geworden van de kunstkring van het openlucht museum Eynderhoof waar men ook een Anton Pieck evenement heeft.
                                    Recentelijk was ik bezig met het schilderen van oude geveltjes en in 2025 besloot ik een korte cursus kunstbeschouwing te gaan doen over Pieter Bruegel de Oudere.

                                </p>
                                <p>
                                    Over tien jaar ben ik misschien zover dat ik ook wat leuke opdrachten voor anderen heb
                                    kunnen doen en heb ik in ieder geval mijn portfolio verder uitgebreid .</p>

                                <div><a href={pdf} target="_parent" rel="noreferrer noopener">Resume</a></div>
                            </section>

                        </div>
                        <p>Terug naar de <Link to="/">Homepagina</Link></p>
                    </div>
                    {/*</div>*/}
                </div>


            </main>
        </>
    )
        ;
}

export default Profile;