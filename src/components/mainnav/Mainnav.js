import React from 'react';
import {Link} from "react-router-dom";
import './Mainnav.css';
import logo from "../../assets/logo_webLeonoor.jpg";
import Button from "../button/Button";
import {ReactComponent as Search} from "../../assets/search.svg";
import {ReactComponent as Favorite} from "../../assets/carbon-favorite.svg";
import {ReactComponent as ShoppingCart} from "../../assets/shopping.svg";

function Mainnav({children}) {
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
                        {children}

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

export default Mainnav;