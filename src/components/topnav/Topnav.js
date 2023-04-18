import React from 'react';
import {useHistory, Link} from "react-router-dom";
import './Topnav.css';

function Topnav(props) {
    const history = useHistory();
    return (
        <>
            <header className="outer-container top-nav-background">
                <div className="inner-container">

                    <div className="top-navigation">
                        <nav className="top-nav-menu">
                            <ul>
                                <li><Link to="/">Nieuws</Link></li>
                                <li><Link to="/">Profiel</Link></li>
                                <li><Link to="/">Werkwijze</Link></li>
                                <li><Link to="/">Contact</Link></li>
                                <li><Link to="/">Inhoud</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Topnav;