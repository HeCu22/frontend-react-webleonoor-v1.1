import React from 'react';
import {useHistory} from "react-router-dom";
import {ReactComponent as Back} from "../../assets/Back-arrow.svg";
import {ReactComponent as Forward} from "../../assets/Forward-arrow.svg";
import Article from "../../components/article/Article";
import Button from "../../components/button/Button";
import {ReactComponent as Goto} from "../../assets/go.svg";
import loren from "../../assets/images/sofia_loren_in_iItalia.jpg";
import cc from "../../assets/images/cc_once_upon.jpg";
import jdroze from "../../assets/images/jamesdean_roze.jpg";
import ali from "../../assets/images/mohammed_ali.jpg";
import './Sterren.css';
import Mainnavcomp from "../../components/mainnav/Mainnavcomp";


function Sterren(props) {
    const history = useHistory();
    return (
        <>
            <Mainnavcomp
                keuze="sterren"
            />

            <main className="outer-container impression-prints">
                <div className="inner-container">
                    <div className="outer-row">
                        <div className="mid">
                            <div className="header-content">
                                <h1>Sterren</h1>
                                <h2> Een filmster, een stijlicoon of sportheld..</h2>
                                <h4> Het verhaal dat verteld wordt of een levensverhaal </h4>
                                <Button fieldClass="header-button"
                                        clickHandler={() => history.push('/Sterdetails')}
                                        isDisabled={false}> Bekijken <Goto className="shop-icon"/></Button>
                            </div>
                        </div>
                        <Article
                            fieldclass="card"
                            tag="loren"
                            image={loren}
                            title="Sofia Loren in Italië"
                            description="60x50 acryl op canvas board"

                        />
                    </div>
                </div>

            </main>

            <main className="outer-container main-background-title">
                <div className="inner-container">
                    <div className="cards">
                        <p> Sterfiguren in portret</p>
                        <span><Back/> <Forward/></span>
                    </div>

                </div>
            </main>
            <div className="outer-container main-background">
                <div className="inner-container">

                    <div className="outer-row-list">
                        <Article
                            fieldclass="card-portrait"
                            tag="ali"
                            image={ali}
                            title="Mohammed Ali"
                            description="3D 4x50x60 acryl op canvas"

                        />

                        <Article
                            fieldclass="card-portrait"
                            tag="CC"
                            image={cc}
                            title="CC once upon"
                            description="3D 4x70x90 acryl op canvas"
                        />
                        <Article
                            fieldclass="-portrait"
                            tag="JD"
                            image={jdroze}
                            title="James Dean Roze"
                            description="50x80 acryl op papier"

                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sterren;