import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import {ReactComponent as Favorite} from "./assets/carbon-favorite.svg";
import {ReactComponent as ShoppingCart} from "./assets/shopping.svg";
import {ReactComponent as Search} from "./assets/search.svg";
import {ReactComponent as Goto} from "./assets/go.svg";
import {ReactComponent as Back} from "./assets/Back-arrow.svg";
import {ReactComponent as Forward} from "./assets/Forward-arrow.svg";
import Article from "./components/article/Article";
import roze from "./assets/images/princess_pink.jpg";
import vogels from "./assets/images/vogels_in_vlucht.jpg";
import boots from "./assets/images/snow_boots.jpg";
import loren from "./assets/images/sofia_loren_in_iItalia.jpg";
import logo from "./assets/logo_webLeonoor.jpg"
import Button from "./components/button/Button";
import Topnav from "./components/topnav/Topnav";
import './App.css';

function Apporiginal() {


    return (
        <>
            <Topnav/>

            <main className="outer-container main-nav-background">
                <div className="outer-row">
                    <div className="left-nav">
                        <span className="max">
                        <img className="icon-logo" src={logo} alt="Logo-webleonoor"/>
                        </span>
                    </div>
                    <div className="mid-nav">
                        <ul className="outer-row">
                            <li>Sprookjes</li>
                            <li>Sterren</li>
                            <li>James Dean</li>
                            <li>Prints</li>
                            <li>Portretten</li>
                            <li>Vergezichten</li>
                        </ul>
                    </div>
                    <div className="right-nav">
                        <Button
                            clickHandler={() => console.log("Zoeken")}
                            isDisabled={false}> <Search/> Zoek</Button>


                        <Favorite className="favorite-icon"/>
                        <ShoppingCart className="shop-icon"/>
                    </div>
                </div>

            </main>


            <main className="outer-container main-header-background">
                <div className="inner-container">
                    <div className="outer-row">
                        <div className="mid">
                            <div className="header-content">
                                <h1>Bekijk nieuwe thema's</h1>
                                <p> WebLeonoor Schilderijen Composities Portret & sfeer</p>
                                <Button fieldClass="header-button"
                                        clickHandler={() => console.log("Bekijken")}
                                        isDisabled={false}> Bekijken <Goto className="shop-icon"/></Button>
                            </div>
                        </div>
                        <div className="mid">
                            <div className="header-content">
                                <h1>Bekijk nieuwe thema's</h1>
                                <p> WebLeonoor Schilderijen Composities Portret & sfeer</p>
                                <Button fieldClass="header-button"
                                        clickHandler={() => console.log("Bekijken")}
                                        isDisabled={false}> Bekijken <Goto className="shop-icon"/></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <main className="outer-container main-nav-background">
                <div className="inner-container">
                    <div className="cards">
                        <p>Collection items</p>
                        <span><Back/> <Forward/></span>
                    </div>

                </div>
            </main>
            <div className="outer-container main-nav-background">
                <div className="inner-container">

                    <div className="outer-row">
                        <Article
                            tag="Sprookjes"
                            image={roze}
                            title="Princess pink"
                            description="Roze"
                            valuta="€"
                            price="400"/>
                        <Article
                            tag="Sterren"
                            image={loren}
                            title="Sofia Loren in Italie"
                            description="Loren"
                            valuta="€"
                            price="1250,--"/>
                        <Article
                            tag="Prints"
                            image={boots}
                            title="Skischoenen in de sneeuw"
                            description="Boots"
                            valuta="€"
                            price="950,--"/>
                        <Article
                            tag="Look-away"
                            image={vogels}
                            title="Vogels in vlucht"
                            description="Birds"
                            valuta="€"
                            price="1150,--"/>
                    </div>
                </div>
            </div>
            <footer className="outer-container">
                <section>
                    <h3>Copyright © 2010-2022 WebLeonoor. All Rights Reserved.</h3>
                    <p> Last update: 20 January 2020 23:02:18</p>
                </section>
            </footer>


        </>
    )
        ;
}

export default Apporiginal;
