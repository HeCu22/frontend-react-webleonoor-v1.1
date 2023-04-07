import React from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as Back} from "../../assets/Back-arrow.svg";
import {ReactComponent as Forward} from "../../assets/Forward-arrow.svg";
import Article from "../../components/article/Article";
import Mainnav from "../../components/mainnav/Mainnav";
import Button from "../../components/button/Button";
import {ReactComponent as Goto} from "../../assets/go.svg";
import boots from "../../assets/images/snow_boots.jpg";
import gordes from "../../assets/images/building_with_terras.jpg";
import castle from "../../assets/images/castle.jpg";
import structures from "../../assets/images/collage_printstructures.jpg";
import './Prints.css';


function Prints(props) {
    return (
        <>
            <Mainnav>
                <ul className="outer-row">

                    <li><Link to="/sprookjes"> Sprookjes </Link></li>
                    <li><Link to="/sterren"> Sterren</Link></li>
                    <li><Link to="/"> James Dean </Link></li>
                    <li>Prints></li>
                    <li><Link to="/portretten">Portret</Link></li>
                    <li><Link to="/vergezichten"> Kleur </Link></li>
                    <li><Link to="/schetsen"> Zwart/wit </Link></li>
                </ul>

            </Mainnav>
            <main className="outer-container impression-prints">
                <div className="inner-container">
                    <div className="outer-row">
                        <div className="">
                            <div className="header-content">
                                <h1> Strukturen en gebouwen </h1>
                                <h2> Oude muren, oude schoenen in blockprint.</h2>
                                <h3> Een zonnig terras in een oude Franse stad.</h3>
                                <h4> Herinneringen, nostalgie en sfeerbeelden. </h4>

                                <Button fieldClass="header-button"
                                        clickHandler={() => console.log("Bekijken")}
                                        isDisabled={false}> Bekijken <Goto className="shop-icon"/></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <main className="outer-container main-background-title">
                <div className="inner-container">
                    <div className="cards">
                        <p>Print strukturen</p>
                        <span><Back/> <Forward/></span>
                    </div>

                </div>
            </main>
            <div className="outer-container main-background">
                <div className="inner-container">

                    <div className="outer-row-list">
                        <Article
                            fieldclass="card"
                            tag="castle"
                            image={castle}
                            title="Kasteelruïne"
                            description="50x40 block-print op papier"
                        />
                        <Article
                            fieldclass="card"
                            tag="Gordes"
                            image={gordes}
                            title="Gebouw met terras in Gordes"
                            description="70x50 block-print op papier"
                        />
                        <Article
                            fieldclass="card"
                            tag="boots"
                            image={boots}
                            title="Snow boots"
                            description="70x50 block-print op papier"
                        />
                        <Article
                            fieldclass="card"
                            tag="prints"
                            image={structures}
                            title="Print structures"
                            description="70x50 collage van block-prints op papier"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Prints;
