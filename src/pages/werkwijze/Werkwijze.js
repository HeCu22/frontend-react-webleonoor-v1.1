import React from 'react';
import './Werkwijze.css';
import Mainnavcomp from "../../components/mainnav/Mainnavcomp";
import {Link} from "react-router-dom";

function Werkwijze(props) {
    return (
        <>
            <Mainnavcomp
                keuze="werkwijze"
            />
            <main className="outer-container main-background-profile">
                <div className="inner-container">

                    <div className="mid-profile">
                        <h1>Werkwijze</h1>

                        <div className="space">

                            <section className="text-space">
                                <h1>wow</h1>
                                <p><strong>Atelier:</strong> vanuit huis of op locatie</p>
                                <p><strong>Locatie:</strong> Weert </p>
                                <h3>Technieken</h3>
                                <p>Meestal schilder ik met acryl of gebruik collages. Printstucturen maak ik met inkt in blockprint. Tekeningen met grafiet of inkt. </p>
                                <p>
                                   Het papier dat ik gebruik is meestal op poster formaat. Daarnaast schilder ik ook op canvas panelen.

                                </p>
                                <p>Mijn specialiteit is portretten en sfeerbeelden</p>

                            </section>
                        </div>
                        <p>Terug naar de <Link to="/">Homepagina</Link></p>

                    </div>
                </div>
            </main>
        </>
    );
}

export default Werkwijze;