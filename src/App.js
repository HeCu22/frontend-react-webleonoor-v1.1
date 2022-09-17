import React from "react";

import {ReactComponent as Favorite} from "./assets/carbon-favorite.svg";
import {ReactComponent as ShoppingCart} from "./assets/shopping.svg";
import {ReactComponent as Search} from "./assets/search.svg";
import {ReactComponent as Goto} from "./assets/go.svg";
import logo from "./assets/logo_webLeonoor.jpg";
import './App.css';

function App() {

    function Button({children, clickHandler, isDisabled, fieldClass}) {
        return (
            <button className={fieldClass}
                type="button"
                disabled={isDisabled}
                onClick={clickHandler}>
                {children}
            </button>);
    }

    return (
        <>
            <header className="outer-container top-nav-background">
                <div className="inner-container">

                    <div className="top-navigation">
                        <nav className="top-nav-menu">
                            <ul>
                                <li>Nieuws</li>
                                <li>Profiel</li>
                                <li>Werkwijze</li>
                                <li>Contact</li>
                                <li>Inhoud</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

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
                            <li>Film sterren</li>
                            <li>James Dean</li>
                            <li>Print strukturen</li>
                            <li>Portretten</li>
                            <li>Ver gezichten</li>
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
                    <div className="aside-left-top"></div>
                    <div className="mid">
                        <div className="max">
                        <h1>Bekijk nieuwe thema's</h1>
                        <p> WebLeonoor Schilderijen Composities Portret & sfeer</p>
                        <Button
                            clickHandler={() => console.log("Bekijken")}
                            isDisabled={false} fieldClass="fieldclass"> Bekijken <Goto className="shop-icon"/></Button>
                        </div>
                    </div>
                    <div className="aside-bottom-right"></div>
                </div>
            </main>


        </>
    )
        ;
}

export default App;
