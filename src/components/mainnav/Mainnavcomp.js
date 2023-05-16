import React from 'react';
import {Link} from "react-router-dom";
import './Mainnav.css';
import logo from "../../assets/logo_webLeonoor.jpg";
import Button from "../button/Button";
import {ReactComponent as Search} from "../../assets/search.svg";
import {ReactComponent as Favorite} from "../../assets/carbon-favorite.svg";
import {ReactComponent as ShoppingCart} from "../../assets/shopping.svg";

function Mainnavcomp({keuze}) {
    return (
        <>
            <main className="outer-container main-nav-background">
                <div className="outer-row">
                    <div className="left-nav">
                        <span className="max">
                        <img className="icon-logo" src={logo} alt="Logo-webleonoor"/>
                        </span>
                    </div>
                    <div className="mid-nav">
                        <ul className="outer-row">
                            <li>{keuze !== "culturemix" ? <Link to="/culturemix"> culturemix </Link> : <> {keuze} </> } </li>
                            <li>{keuze !== "jamesdean" ? <Link to="/jamesdean"> James Dean </Link> : <> {keuze} </> } </li>
                            <li>{keuze !== "vergezichten" ? <Link to="/vergezichten"> vergezichten </Link> : <> {keuze} </> } </li>
                            <li>{keuze !== "portretten" ? <Link to="/portretten"> portretten </Link> : <> {keuze} </> } </li>
                            <li>{keuze !== "prints" ? <Link to='/prints'> prints </Link> : <> {keuze} </> } </li>
                            <li>{keuze !== "sprookjes" ? <Link to="/sprookjes"> sprookjes </Link> : <> {keuze} </> } </li>
                            <li>{keuze !== "sterren" ? <Link to="/sterren"> sterren </Link> : <> {keuze} </> } </li>
                            <li>{keuze !== "schetsen" ? <Link to="/schetsen"> schetsen </Link> : <> {keuze} </> } </li>
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
        </>
    );
}

export default Mainnavcomp;