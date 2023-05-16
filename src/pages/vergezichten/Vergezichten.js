import React from 'react';
import {ReactComponent as Back} from "../../assets/Back-arrow.svg";
import {ReactComponent as Forward} from "../../assets/Forward-arrow.svg";
import Article from "../../components/article/Article";

import tent from "../../assets/images/tent_at_the_beach.jpg";
import italian from "../../assets/images/still_life_Italian.jpg";

import bedoin from "../../assets/images/bedoin.jpg";
import './Vergezichten.css';

import vogels from "../../assets/images/vogels_in_vlucht.jpg";
import Button from "../../components/button/Button";
import {ReactComponent as Goto} from "../../assets/go.svg";
import Mainnavcomp from "../../components/mainnav/Mainnavcomp";

function Vergezichten(props) {
    return (
        <>
            <Mainnavcomp
                keuze="vergezichten"
            />

            <main className="outer-container impression-vergezicht">
                <div className="inner-container">
                    <div className="outer-row">
                        <div className="mid">
                            <div className="header-content">
                                <h1>Vergezicht</h1>
                                <h3>een dorp of stad in de verte</h3>
                                <h1>Blikveld </h1>
                                        <h4>en kleurcontrasten</h4>
                                <Button fieldClass="header-button"
                                        clickHandler={() => console.log("Bekijken")}
                                        isDisabled={false}> Bekijken <Goto className="shop-icon"/></Button>
                            </div>
                        </div>
                        <Article
                            fieldclass="top-card"
                            tag="italian"
                            image={italian}
                            title="Italië"
                            description="50x60 acryl op papier"
                        />
                    </div>
                </div>
            </main>
            <main className="outer-container main-background-title">
                <div className="inner-container">
                    <div className="cards">
                        <p>Blikveld en vergezichten in kleur</p>
                        <span><Back/> <Forward/></span>
                    </div>

                </div>
            </main>
            <div className="outer-container main-background">
                <div className="inner-container">

                    <div className="outer-row-list">
                        <Article
                            fieldclass="card"

                            tag="vogels"
                            image={vogels}
                            title="Vogels in vlucht"
                            description="70x50 acryl op papier"

                            />
                        <Article
                            fieldclass="card"

                            tag="tent"
                            image={tent}
                            title="Tent at the beach"
                            description="70x50 acryl op papier"

                            />

                        <Article
                            fieldclass="card"
                            tag="bedoin"
                            image={bedoin}
                            title="Bedoin"
                            description="40x30 acryl op papier"

                            />



                    </div>
                </div>
            </div>
        </>
    );
}

export default Vergezichten;