import React from 'react';
import {Link} from "react-router-dom";
import profileArt from "../../assets/profileArt.png"
import logo from "../../assets/Forward-arrow.svg"
import './Contact.css';
import Mainnavcomp from "../../components/mainnav/Mainnavcomp";

function Contact(props) {
    return (
        <>
            <Mainnavcomp
                keuze="contact"
            />

            <main className="outer-container main-background-profile">
                <div className="inner-container">

                    <div className="mid-profile">
                        <h1>Profiel Pagina</h1>

                        <div className="space">
                            <span className="picture-span"><img className="picture-space" src={profileArt}
                                                                alt="artistieke foto"/></span>
                            <section className="text-space">
                                <h1>Contact me</h1>
                                <p><strong>name:</strong> Helga Cuijpers </p>
                                <p><strong>Email:</strong> webleonoor@gmail.com </p>
                                <h3>Thanks!</h3>
                                <p>
                                    Dank voor het bezoeken van mijn website!
                                    </p>
                                <p>
                                    Vanaf 2020 ben ik met meer regelmaat bezig met tekenen of schilderen.
                                    Mijn specialiteit is het maken van portretten, geschilderd in acryl.
                                    Ik werk meest vanuit huis en sta open voor creatieve ideeën.
                                    Stuur mij een email om contact op te nemen.

                                </p>
                                <a href="mailto:webleonoor@gmail.com?subject=Vraag"
                                                target="_blank" rel="noreferrer noopener"> <img className="icon-logo" src={logo} alt="Logo-email"/></a>

                            </section>
                        </div>
                        <p>Terug naar de <Link to="/">Homepagina</Link></p>

                    </div>
                </div>
            </main>
</>
    );
}

export default Contact;
