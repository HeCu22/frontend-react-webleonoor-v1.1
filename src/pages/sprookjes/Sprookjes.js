import React from 'react';
import {ReactComponent as Back} from "../../assets/Back-arrow.svg";
import {ReactComponent as Forward} from "../../assets/Forward-arrow.svg";
import Article from "../../components/article/Article";
import Button from "../../components/button/Button";
import {ReactComponent as Goto} from "../../assets/go.svg";
import roze from "../../assets/images/princess_pink.jpg";
import lady from "../../assets/images/lady_costume.jpg";
import boeddha from "../../assets/images/boeddha_with_mendhi.jpg";
import geisha from "../../assets/images/china_woman.jpg";
import './Sprookjes.css';
import Mainnavcomp from "../../components/mainnav/Mainnavcomp";


function Sprookjes(props) {
    return (
        <>
            <Mainnavcomp
                keuze="sprookjes"
            />

            <main className="outer-container impression-sprookjes">
                <div className="inner-container">
                    <div className="outer-row">
                        <div className="mid">
                            <div className="header-content">
                                <h1>Sprookjes prinsessen </h1>
                                <h3> Droom,  mysterie of fantasie </h3>
                                <h4> Geïnspireerd op fotoportretten, huidversieringen en Oosterse culturen</h4>

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
            <main className="outer-container main-background-title">
                <div className="inner-container">
                    <div className="cards">
                        <p>Sprookjesfiguren in portret</p>
                        <span><Back/> <Forward/></span>
                    </div>

                </div>
            </main>
            <div className="outer-container main-background">
                <div className="inner-container">

                    <div className="outer-row-list">
                        <Article
                            fieldclass="card-portrait"
                            tag="lady"
                            image={lady}
                            title="Dame in kostuum"
                            description="50x70 acryl op papier"
                            valuta=""
                            price=""/>
                        <Article
                            fieldclass="card-portrait"
                            tag="geisha"
                            image={geisha}
                            title="Asian woman"
                            description="50x80 acryl op papier"
                            valuta=""
                            price=""/>
                        <Article
                            fieldclass="card-portrait"
                            tag="boeddha"
                            image={boeddha}
                            title="Boeddha w mendhi"
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