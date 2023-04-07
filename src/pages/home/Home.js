import React from 'react';
import Mainnav from "../../components/mainnav/Mainnav";
import './Home.css';
import {Link} from "react-router-dom";
import {ReactComponent as Back} from "../../assets/Back-arrow.svg";
import {ReactComponent as Forward} from "../../assets/Forward-arrow.svg";
import Article from "../../components/article/Article";
import tulip from "../../assets/images/yellow_tulip.jpg";
import roze from "../../assets/images/princess_pink.jpg";
import loren from "../../assets/images/sofia_loren_in_iItalia.jpg";
import boots from "../../assets/images/snow_boots.jpg";
import vogels from "../../assets/images/vogels_in_vlucht.jpg";
import Button from "../../components/button/Button";
import {ReactComponent as Goto} from "../../assets/go.svg";

function Home(props) {
    return (
        <>
            <Mainnav>

                <ul className="outer-row">

                    <li><Link to="/sprookjes"> Sprookjes </Link></li>
                    <li><Link to="/sterren">Sterren</Link></li>
                    <li><Link to="/jamesdean"> James Dean </Link></li>
                    <li><Link to="/prints"> Prints</Link></li>
                    <li><Link to="/portretten"> Portret </Link></li>
                    <li><Link to="/vergezichten"> Kleur </Link></li>
                    <li><Link to="/schetsen"> Zwart/wit </Link></li>
                </ul>

            </Mainnav>
            <main className="outer-container main-header-background">
                <div className="inner-container">
                    <div className="outer-row">
                        <div className="mid">
                            <div className="header-content">
                                <h1>Bekijk nieuwe thema's</h1>
                                <h2> WebLeonoor Schilderijen</h2>
                                <h3> Composities Portret & sfeer</h3>

                                <Button fieldClass="header-button"
                                        clickHandler={() => console.log("Bekijken")}
                                        isDisabled={false}> Bekijken <Goto className="shop-icon"/></Button>
                            </div>
                        </div>

                        <Article
                            fieldclass="top-card"
                            tag="Bloemen"
                            image={tulip}
                            title="Tulp"
                            description="50x70 acryl op papier"
                        />
                    </div>
                </div>
            </main>
            <main className="outer-container main-background-title">
                <div className="inner-container">
                    <div className="cards">
                        <p>Collectieitems</p>
                        <span><Back/> <Forward/></span>
                    </div>

                </div>
            </main>
            <div className="outer-container main-background">
                <div className="inner-container">

                    <div className="outer-row">
                        <Article
                            fieldclass="card-portrait"
                            tag="Sprookjes"
                            image={roze}
                            title="Roze Prinses"
                            description="50x90 acryl op papier"
                        />

                        <Article
                            fieldclass="card"
                            tag="Sterren"
                            image={loren}
                            title="Sofia Loren in Italie"
                            description="60x50 acryl op canvas board"

                        />
                        <Article
                            fieldclass="card"

                            tag="Prints"
                            image={boots}
                            title="Skischoenen in de sneeuw"
                            description="70x50 block-print op papier"

                        />
                        <Article
                            fieldclass="card"

                            tag="Kleur"
                            image={vogels}
                            title="Vogels in vlucht"
                            description="70x50 acryl op papier"

                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;