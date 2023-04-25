import React from 'react';
import Mainnav from "../../components/mainnav/Mainnav";
import './Profile.css';
import {Link} from "react-router-dom";
import profielfoto from "../../assets/profile.jpg";
import pdf from "../../assets/resume.pdf";

function Profile(props) {
    return (
        <>
            <Mainnav>
                <ul className="outer-row">
                    <li><Link to="/culturemix"> Cultuurmix </Link></li>
                    <li><Link to="/jamesdean"> James Dean </Link></li>
                    <li><Link to="/vergezichten"> Kleur </Link></li>
                    <li><Link to="/portretten">Portret</Link></li>
                    <li><Link to="/prints"> Prints</Link></li>
                    <li><Link to="/sprookjes"> Sprookjes </Link></li>
                    <li><Link to="/sterren"> Sterren</Link></li>
                    <li><Link to="/schetsen"> Zwart/wit </Link></li>
                </ul>

            </Mainnav>
            <main className="outer-container main-background-profile">
                <div className="inner-container">
                    {/*<div className="outer-row">*/}

                    <div className="mid-profile">
                        <h1>Profiel Pagina</h1>

                        <div className="space">
                            <span className="picture-span"><img className="picture-space" src={profielfoto}
                                                                alt="profile photo"/></span>
                            <section className="text-space">
                                <h1>About me</h1>
                                <p><strong>name:</strong> Wilnora </p>
                                <p><strong>Email:</strong> webleonoor@gmail.com </p>
                                <h3>Ambitie:</h3>
                                <p>
                                    Met tussenpozen heb ik cursussen tekenen/schilderen gevolgd en geëxperimenteert met
                                    verschillende technieken.
                                    Vanaf 2020 ben ik met meer regelmaat bezig met tekenen of schilderen.

                                    Over vijf jaar heb ik hopelijk alle tijd voor creatieve hobby's vanuit huis.                                </p>
                                <p>
                                    Een tijd geleden heb ik een schilderij in opdracht gemaakt en verkocht. Ook heb ik
                                    toen
                                    een expositie gegeven samen met cursisten van de schildercursus die ik toen
                                    deed.
                                    Het eind-project had een aantal mooie resultaten en één schilderij heb ik verkocht
                                    en
                                    één opgehangen in de huiskamer van mijn ouders.
                                    Ik heb toen een website gemaakt om mijn hele portfolio te presenteren.
                                </p>

                                <p>
                                    Ik heb nog facebook contact met docenten portret/model tekenen en met een oud
                                    medecursist die beide aardig aan de
                                    weg timmeren.
                                    Dat inspireert wel, maar meer inspiratie ontving ik via LinkedIn Learning cursussen
                                    van Mary Jane Begin, Amy Wynne en Will Kemp.
                                </p>
                                <p>
                                    In 2015 en 2016 volgde ik een aantal portret en model tekencursussen en in 2018 een
                                    korte cursus hand-lettering.
                                    Ik heb een aantal schetsen en composities gemaakt en een aantal daarvan wil ik in een
                                    verhaal of achtergrond zetten.
                                    Ik heb een aantal filmseries opgenomen met mooie beelden. Daar wil ik wat nieuwe
                                    schetsen uit opzetten
                                </p>
                                <p>
                                    In 2022 en 2023 had ik de tijd om mijn website anders op te zetten om er
                                    gemakkelijker
                                    iets bij te kunnen zetten.
                                    Ik heb toen een cursus webdevelopment bij Novi Hogeschool opgepakt om mijn website
                                    er
                                    volgens de laatste trends en eisen uit te laten zien.

                                </p>
                                <p>
                                    Over tien jaar ben ik misschien zover dat ik wat leuke opdrachten voor anderen heb
                                    gedaan.</p>
                                <div> <a href={pdf} target="_blank">Resume</a></div>
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