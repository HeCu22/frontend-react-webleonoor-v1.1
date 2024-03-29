import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Topnav from "./components/topnav/Topnav";
import Home from "./pages/home/Home";
import './App.css';

import Footer from "./components/footer/Footer";
import Vergezichten from "./pages/vergezichten/Vergezichten";
import Schetsen from "./pages/schetsen/Schetsen";
import Prints from "./pages/prints/Prints";
import Sterren from "./pages/sterren/Sterren";
import Sprookjes from "./pages/sprookjes/Sprookjes";
import Jamesdean from "./pages/jamesdean/Jamesdean";
import Portretten from "./pages/portretten/Portretten";
import Culturemix from "./pages/culturemix/Culturemix";

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
                <Route exact path="/portretten">
                    <Portretten/>
                </Route>
                <Route exact path="/jamesdean">
                    <Jamesdean/>
                </Route>
                <Route exact path="/sterren">
                    <Sterren/>
                </Route>
                <Route exact path="/vergezichten">
                    <Vergezichten/>
                </Route>
                <Route exact path="/schetsen">
                    <Schetsen/>
                </Route>
                <Route exact path="/prints">
                    <Prints/>
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