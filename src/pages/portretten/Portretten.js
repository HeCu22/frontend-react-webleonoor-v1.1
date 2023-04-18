import React from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as Back} from "../../assets/Back-arrow.svg";
import {ReactComponent as Forward} from "../../assets/Forward-arrow.svg";
import Article from "../../components/article/Article";
import Mainnav from "../../components/mainnav/Mainnav";
import Button from "../../components/button/Button";
import {ReactComponent as Goto} from "../../assets/go.svg";
import blue from "../../assets/images/portrait_of_boy_blue.jpg";
import girlls from "../../assets/images/portret_girl_vb.jpg";
import jongen from "../../assets/images/jongensportret.jpg";
import man from "../../assets/images/portrait_of_man_warm.jpg";
import './Portretten.css';
import girl from "../../assets/images/portrait_of_girl.jpg";


function Portretten(props) {
    return (
        <>
            <Mainnav>
                <ul className="outer-row">
                    <li><Link to="/culturemix"> Cultuurmix </Link></li>
                    <li><Link to="/jamesdean"> James Dean </Link></li>
                    <li><Link to="/vergezichten"> Kleur </Link></li>
                    {/*<li><Link to="/portretten">Portret</Link></li>*/}
                    <li><Link to="/prints"> Prints</Link></li>
                    <li><Link to="/sprookjes"> Sprookjes </Link></li>
                    <li><Link to="/sterren"> Sterren</Link></li>
                    <li><Link to="/schetsen"> Zwart/wit </Link></li>
                </ul>

            </Mainnav>
            <main className="outer-container impression-jd">
                <div className="inner-container">
                    <div className="outer-row">
                        <div className="mid">
                            <div className="header-content">
                                <h1>Portret</h1>
                                <h2>realistisch of fantasie</h2>
                                <h4>droom of werkelijkheid</h4>


                                <Button fieldClass="header-button"
                                        clickHandler={() => console.log("Bekijken")}
                                        isDisabled={false}> Bekijken <Goto className="shop-icon"/></Button>
                            </div>
                        </div>
                        <Article
                            fieldclass="card"
                            tag="girl"
                            image={girlls}
                            title="Portret van een meisje"
                            description="40x30 houtskool op dun schetspapier"
                        />
                    </div>
                </div>
            </main>
            <main className="outer-container main-background-title">
                <div className="inner-container">
                    <div className="cards">
                        <p>Portretten van mensen</p>
                        <span><Back/> <Forward/></span>
                    </div>

                </div>
            </main>
            <div className="outer-container main-background">
                <div className="inner-container">
                    <div className="outer-row-list">

                        <Article
                            fieldclass="card-portrait"
                            tag="blue"
                            image={blue}
                            title="Portret in blauw"
                            description="25x40 acryl op papier"
                        />
                        <Article
                            fieldclass="card-portrait"
                            tag="man"
                            image={man}
                            title="Portret ve oude man"
                            description="40x50 acryl op papier"
                        />
                        <Article
                            fieldclass="card-portrait"
                            tag="jongen"
                            image={jongen}
                            title="Portret ve jongen"
                            description="30x40 houtskool op papier"
                        />
                        <Article
                            fieldclass="card-portrait"
                            tag="girl"
                            image={girl}
                            title="Schets ve meisje"
                            description="50x60 charcoal on paper"
                        />

                    </div>

                </div>
            </div>
        </>
    );
}

export default Portretten;