import React from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as Back} from "../../assets/Back-arrow.svg";
import {ReactComponent as Forward} from "../../assets/Forward-arrow.svg";
import Article from "../../components/article/Article";

import vaas from "../../assets/images/still_life_with_glass_vase.jpg";
import beer from "../../assets/images/still_life_with_bear.jpg";
import kip from "../../assets/images/chicken.jpg";
import dommel from "../../assets/images/dommel.jpg";
import './Schetsen.css';
import Mainnav from "../../components/mainnav/Mainnav";


import Button from "../../components/button/Button";
import {ReactComponent as Goto} from "../../assets/go.svg";
import schets from "../../assets/images/vrije_schets.jpg";

function Schetsen(props) {
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
                </ul>

            </Mainnav>                    {/*<li><Link to="/schetsen"> Zwart/wit </Link></li>*/}

            <main className="outer-container impression-schetsen">
                <div className="inner-container">
                    <div className="outer-row">
                        <div className="">
                            <div className="header-content">
                                <h1>Schetsen</h1>
                                <h2> Stilleven</h2>
                                <h4> Zwart-wit contrasten</h4>
                                <h2>Vergezicht</h2>
                                <h4> een landschap</h4>
                                <Button fieldClass="header-button"
                                        clickHandler={() => console.log("Bekijken")}
                                        isDisabled={false}> Bekijken <Goto className="shop-icon"/></Button>
                            </div>
                        </div>
                        <Article
                            fieldclass="card"
                            tag="schets"
                            image={schets}
                            title="Vrije schets"
                            description="70x50 houtskool op papier"
                        />
                    </div>
                </div>
            </main>
            <main className="outer-container main-background-title">
                <div className="inner-container">
                    <div className="cards">
                        <p>Schetsen zwart/wit</p>
                        <span><Back/> <Forward/></span>
                    </div>

                </div>
            </main>
            <div className="outer-container main-background">
                <div className="inner-container">

                    <div className="outer-row-list">


                        <Article
                            fieldclass="card"
                            tag="vaas"
                            image={vaas}
                            title="Still life with vase"
                            description="70x50 wit houtskool op zwart papier"                            />

                        <Article
                            fieldclass="card"
                            tag="beer"
                            image={beer}
                            title="Still life with bear"
                            description="70x50 wit houtskool op zwart papier"
                            />
                        <Article
                            fieldclass="card"
                            tag="kip"
                            image={kip}
                            title="Chicken"
                            description="30x20 houtskool op papier"
                            />
                        <Article
                            fieldclass="card"
                            tag="dommel"
                            image={dommel}
                            title="Schets langs de Dommel"
                            description="40x30 grafiet op papier"
                            />



                    </div>
                </div>
            </div>
        </>
    );
}

export default Schetsen;