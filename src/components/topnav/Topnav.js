import React from 'react';
import {Link} from "react-router-dom";
import './Topnav.css';

function Topnav(props) {
    return (
        <>
            <header className="outer-container top-nav-background">
                <div className="inner-container">

                    <div className="top-navigation">
                        <nav className="top-nav-menu">
                            <ul>
                                <li><Link to="/">Nieuws</Link></li>
                                <li><Link to="/profile">Profiel</Link></li>
                                <li><Link to="/werkwijze">Werkwijze</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/portfolio">Inhoud</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Topnav;