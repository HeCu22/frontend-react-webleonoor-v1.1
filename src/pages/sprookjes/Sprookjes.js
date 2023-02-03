import React from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as Back} from "../../assets/Back-arrow.svg";
import {ReactComponent as Forward} from "../../assets/Forward-arrow.svg";
import Article from "../../components/article/Article";
import Mainnav from "../../components/mainnav/Mainnav";
import Button from "../../components/button/Button";
import {ReactComponent as Goto} from "../../assets/go.svg";
import roze from "../../assets/images/princess_pink.jpg";
import lady from "../../assets/images/lady_costume.jpg";
import boeddha from "../../assets/images/boeddha_with_mendhi.jpg";
import geisha from "../../assets/images/china_woman.jpg";
import './Sprookjes.css';


function Sprookjes(props) {
    return (
        <>
            <Mainnav>
                <ul className="outer-row">
                    <li> Sprookjes</li>
                    <li><Link to="/culturemix"> Culturen </Link></li>
                    <li><Link to="/sterren">Sterren</Link></li>
                    <li><Link to="/jamesdean"> James Dean </Link></li>
                    <li><Link to="/prints"> Prints</Link></li>
                    <li><Link to="/portretten">Portret</Link></li>
                    <li><Link to="/vergezichten"> Kleur </Link> </li>
                    <li><Link to="/schetsen"> Zwart/wit </Link> </li>
                </ul>

            </Mainnav>
            <main className="outer-container impression-sprookjes">
                <div className="inner-container">
                    <div className="outer-row">
                        <div className="mid">
                            <div className="header-content">
                                <h1>Sprookjes prinsessen </h1>
                                <h2> Sprookjesfiguren, decoraties, structuren.</h2>
                                <h3> Droom,  mysterie, fantasie of stijlicoon. </h3>
                                <h4> Geïnspireerd op fotoportretten, huidversieringen en vreemde culturen</h4>

                                <Button fieldClass="header-button"
                                        clickHandler={() => console.log("Bekijken")}
                                        isDisabled={false}> Bekijken <Goto className="shop-icon"/></Button>
                            </div>
                        </div>
                        <Article
                            fieldclass="top-card"
                            tag="roze"
                            image={roze}
                            title="Princess Pink"
                            description="50x80 acryl op papier"
                            valuta=""
                            price=""/>
                    </div>
                </div>
            </main>
            <main className="outer-container main-background">
                <div className="inner-container">
                    <div className="cards">
                        <p>Sprookjes</p>
                        <span><Back/> <Forward/></span>
                    </div>

                </div>
            </main>
            <div className="outer-container main-background">
                <div className="inner-container">

                    <div className="outer-row-list">
                        <Article
                            fieldclass="card"
                            tag="lady"
                            image={lady}
                            title="Dame in kostuum"
                            description="50x70 acryl op papier"
                            valuta=""
                            price=""/>
                        <Article
                            fieldclass="card"
                            tag="geisha"
                            image={geisha}
                            title="Asian woman"
                            description="50x80 acryl op papier"
                            valuta=""
                            price=""/>
                        <Article
                            fieldclass="card"
                            tag="boeddha"
                            image={boeddha}
                            title="Boeddha with mendhi"
                            description="50x80 acryl op papier"
                            valuta=""
                            price=""/>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Sprookjes;