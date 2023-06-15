import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Topnav from "./components/topnav/Topnav";
import Home from "./pages/home/Home";
import './App.css';

import Footer from "./components/footer/Footer";
import Vergezichten from "./pages/vergezichten/Vergezichten";
import Schetsen from "./pages/schetsen/Schetsen";
import Prints from "./pages/prints/Prints";
import Sterren from "./pages/sterren/Sterren";
import Sterdetails from "./pages/sterdetails/Sterdetails";
import Sprookjes from "./pages/sprookjes/Sprookjes";
import Jamesdean from "./pages/jamesdean/Jamesdean";
import Portretten from "./pages/portretten/Portretten";
import Culturemix from "./pages/culturemix/Culturemix"
import Cultdetails from "./pages/cultdetails/Cultdetails";
import Profile from "./pages/profile/Profile";
import Contact from "./pages/contact/Contact"
import Werkwijze from "./pages/werkwijze/Werkwijze";
import Portretdetails from "./pages/portretdetails/Portretdetails";
import Vergezichtdetails from "./pages/vergezichtdetails/Vergezichtdetails";
import Nieuws from "./pages/nieuws/Nieuws";
import Portfolio from "./pages/portfolio/Portfolio";

function App(props) {
    return (
        <>
            <Topnav/>
            <Switch>
                <Route exact path="/sprookjes">
                    <Sprookjes/>
                </Route>
                <Route exact path="/culturemix">
                    <Culturemix/>
                </Route>
                <Route exact path="/cultdetails">
                    <Cultdetails/>
                </Route>
                <Route exact path="/portretten">
                    <Portretten/>
                </Route>
                <Route exact path="/portretdetails">
                    <Portretdetails/>
                </Route>
                <Route exact path="/jamesdean">
                    <Jamesdean/>
                </Route>
                <Route exact path="/sterren">
                    <Sterren/>
                </Route>
                <Route exact path="/sterdetails">
                    <Sterdetails/>
                </Route>
                <Route exact path="/vergezichten">
                    <Vergezichten/>
                </Route>
                <Route exact path="/vergezichtdetails">
                    <Vergezichtdetails/>
                </Route>

                <Route exact path="/schetsen">
                    <Schetsen/>
                </Route>
                <Route exact path="/prints">
                    <Prints/>
                </Route>
                <Route exact path="/profile">
                    <Profile/>
                </Route>
                <Route exact path="/contact">
                    <Contact/>
                </Route>
                <Route exact path="/werkwijze">
                    <Werkwijze/>
                </Route>
                <Route exact path="/portfolio">
                    <Portfolio/>
                </Route>
                <Route exact path="/nieuws">
                    <Nieuws/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
            <Footer/>
        </>
    );
}

export default App;