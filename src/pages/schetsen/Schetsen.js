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

function Schetsen(props) {
    return (
        <>
            <Mainnav>
                <ul className="outer-row">
                    <li><Link to="/sprookjes"> Sprookjes </Link></li>
                    <li><Link to="/sterren"> Sterren</Link></li>
                    <li><Link to="/jamesdean"> James Dean </Link></li>
                    <li><Link to="/prints"> Prints</Link></li>
                    <li><Link to="/portretten">Portret</Link></li>
                    <li><Link to="/vergezichten"> Kleur </Link> </li>
                    <li> Zwart/wit </li>
                </ul>

            </Mainnav>
            <main className="outer-container impression-schetsen">
                <div className="inner-container">
                    <div className="outer-row">
                        <div className="">
                            <div className="header-content">
                                <h1>Blikveld en vergezicht</h1>
                                <h2> Stilleven, dichtbij of veraf</h2>
                                <h3> Zwart-wit contrasten</h3>
                                <h4> een heidelandschap</h4>
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