import React from 'react';
import {useHistory} from "react-router-dom";
import {ReactComponent as Back} from "../../assets/Back-arrow.svg";
import {ReactComponent as Forward} from "../../assets/Forward-arrow.svg";
import Article from "../../components/article/Article";
import Button from "../../components/button/Button";
import {ReactComponent as Goto} from "../../assets/go.svg";
import jdstorm from "../../assets/images/james_dean_storm.jpg";
import jdsmokey from "../../assets/images/james_dean_smokey.jpg";
import jd from "../../assets/images/james_dean.jpg";
import jdcolors from "../../assets/images/james_dean_colors.jpg";
import './Jamesdean.css';
import Mainnavcomp from "../../components/mainnav/Mainnavcomp";

function Jamesdean(props)  {
const history = useHistory();
    return (
        <>
            <Mainnavcomp
                keuze="James Dean"
            />

            <main className="outer-container impression-jd">
                <div className="inner-container">
                    <div className="outer-row">
                        <div className="mid">
                            <div className="header-content">
                                <h1>James Dean</h1>
                                <h2> Realistisch of fantasie.</h2>
                                <h3> Van James Dean zijn vele mooie afbeeldingen te vinden.</h3>

                                <Button fieldClass="header-button"
                                        clickHandler={() => history.push('/Sterdetails')}
                                        isDisabled={false}> Bekijken <Goto className="shop-icon"/></Button>
                            </div>
                        </div>
                        <Article
                            fieldclass="top-card"
                            tag="JD"
                            image={jd}
                            title="James Dean"
                            description="40x50 acryl op canvas board"
                        />
                    </div>
                </div>
            </main>
            <main className="outer-container main-background-title">
                <div className="inner-container">
                    <div className="cards">
                        <p>Jeans Dean portretten</p>
                        <span><Back/> <Forward/></span>
                    </div>

                </div>
            </main>
            <div className="outer-container main-background">
                <div className="inner-container">

                    <div className="outer-row-list">



                        <Article
                            fieldclass="card-portrait"
                            tag="JD colors"
                            image={jdcolors}
                            title="James Dean colors"
                            description="40x50 acryl op papier"
                        />
                        <Article
                            fieldclass="-portrait"
                            tag=" smoke"
                            image={jdsmokey}
                            title="James smoking"
                            description="50x80 acryl op papier"
                        />
                        <Article
                            fieldclass="card-portrait"
                            tag="JD storm"
                            image={jdstorm}
                            title="James Dean storm"
                            description="40x50 acryl op papier"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Jamesdean;