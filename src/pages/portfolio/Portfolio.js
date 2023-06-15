import React from 'react';
import './Portfolio.css';
import Mainnavcomp from "../../components/mainnav/Mainnavcomp";
import Article from "../../components/article/Article";
import cultportret from "../../assets/images/african_girl.jpg";
import jamesdean from "../../assets/images/james_dean.jpg";
import view from "../../assets/images/still_life_Italian.jpg";
import portret from "../../assets/images/portret_girl_vb.jpg";
import print from "../../assets/images/blockprints.jpg";
import sprookje from "../../assets/images/princess_pink.jpg";
import ster from "../../assets/images/sofia_loren_in_iItalia.jpg";
import schets from "../../assets/images/vrije_schets.jpg";

function Portfolio(props) {
    return (
        <>
            <Mainnavcomp keuze="portfolio"/>
            <main className="outer-container main-background">
                <div className="inner-container">
                    <div className="tiles">
                        <div className="tile">
                            <Article
                                fieldclass="card-portfolio"
                                tag="culturemix"
                                image={cultportret}
                                title="Afrikaanse"
                                description="cultuur in portret"
                            />
                        </div>
                        <div className="tile">
                            <Article
                                fieldclass="card-portfolio"
                                tag="jamesdean"
                                image={jamesdean}
                                title="James Dean charming"
                                description="James Dean portretten"
                            />
                        </div>
                        <div className="tile">
                            <Article
                                fieldclass="card-portfolio"
                                tag="vergezichten"
                                image={view}
                                title="Italië"
                                description="blikveld en  vergezicht in kleur"
                            />
                        </div>
                        <div className="tile">
                            <Article
                                fieldclass="card-portfolio"
                                tag="portretten"
                                image={portret}
                                title="portret van een meisje"
                                description="portretten van mensen"
                            />
                        </div>
                        <div className="tile">
                            <Article
                                fieldclass="card-portfolio"
                                tag="prints"
                                image={print}
                                title="blockprints"
                                description="print strukturen"
                            />
                        </div>
                        <div className="tile">
                            <Article
                                fieldclass="card-portfolio"
                                tag="sprookjes"
                                image={sprookje}
                                title="Roze prinses"
                                description="sprookjesfiguren in portret"
                            />
                        </div>
                        <div className="tile">
                            <Article
                                fieldclass="card-portfolio"
                                tag="sterren"
                                image={ster}
                                title="Sofia Loren in Italia"
                                description="sterfiguren in portret"
                            />
                        </div>
                        <div className="tile">
                            <Article
                                fieldclass="card-portfolio"
                                tag="schetsen"
                                image={schets}
                                title="vrije schets"
                                description="zwart/wit tekeningen"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Portfolio;