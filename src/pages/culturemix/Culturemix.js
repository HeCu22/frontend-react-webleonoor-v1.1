import React from 'react'
import {ReactComponent as Back} from "../../assets/Back-arrow.svg";
import {ReactComponent as Forward} from "../../assets/Forward-arrow.svg";
import Article from "../../components/article/Article";
import Mainnavcomp from "../../components/mainnav/Mainnavcomp";
import Button from "../../components/button/Button";
import {ReactComponent as Goto} from "../../assets/go.svg";
import africa from "../../assets/images/african_girl.jpg";
import arabic from "../../assets/images/arabic_prinses.jpg";
import marokko from "../../assets/images/marokkaanse_bruid.jpg";
import desert from "../../assets/images/desert_woman.jpg";
import './Culturemix.css';


function Culturemix(props) {
    return (
        <>
            <Mainnavcomp
                  keuze="culturemix"    />

            <main className="outer-container impression-culture">
                <div className="inner-container">
                    <div className="outer-row">
                        <div className="mid">
                            <div className="header-content">
                                <h1>Culturen</h1>
                                <h2>Afrikaans, Arabisch, Marokkaans....</h2>
                                <h4>gesluierd of gemaskeerd</h4>
                                <Button fieldClass="header-button"
                                        clickHandler={() => console.log("Bekijken")}
                                        isDisabled={false}> Bekijken <Goto className="shop-icon"/></Button>
                            </div>
                        </div>
                        <Article
                            fieldclass="card"
                            tag="afrika"
                            image={africa}
                            title="Afrikaanse"
                            description="70x50 acryl op papier"
                        />

                    </div>
                </div>
            </main>
            <main className="outer-container main-background-title">
                <div className="inner-container">
                    <div className="cards">
                        <p>Cultuur in portret</p>
                        <span><Back/> <Forward/></span>
                    </div>

                </div>
            </main>
            <div className="outer-container main-background">
                <div className="inner-container">

                    <div className="outer-row-list">
                        <Article
                            fieldclass="card-portrait"
                            tag="marokko"
                            image={marokko}
                            title="Marokkaanse bruid"
                            description="50x80 acryl op papier"
                        />
                        <Article
                            fieldclass="card"
                            tag="arabisch"
                            image={arabic}
                            title="Arabische prinses"
                            description="50x40  acryl en verf op canvas board"
                        />
                        <Article
                            fieldclass="card"
                            tag="desert"
                            image={desert}
                            title="Woestijn vrouw"
                            description="80x50 acryl en struktuur op papier"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Culturemix;