import React from "react";
import './App.css';

function App() {

    function Button({children, clickHandler, isDisabled}) {
        return (
            <button
                type="button"
                disabled={isDisabled}
                onClick={clickHandler}>
                {children}
            </button>);
    }

    return (
        <>
            <header className="top-region">
                <div className="inner-top-region">
                    <div className="top-navigation">
                        <nav className="top-nav-menu">
                            <Button
                                children="nieuws"
                                clickHandler={() => console.log("nieuws")}
                                isDisabled={false}
                            />

                            <Button
                                children="Profiel"
                                clickHandler={() => console.log("nieuws")}
                                isDisabled={false}
                            />

                            <Button
                                children="Werkwijze"
                                clickHandler={() => console.log("nieuws")}
                                isDisabled={false}
                            />

                            <Button
                                children="Portfolio"
                                clickHandler={() => console.log("nieuws")}
                                isDisabled={false}
                            />

                            <Button
                                children="Contact"
                                clickHandler={() => console.log("nieuws")}
                                isDisabled={false}
                            />

                            <Button
                                children="nieuws"
                                clickHandler={() => console.log("inhoud")}
                                isDisabled={false}
                            />
                        </nav>
                    </div>
                </div>
            </header>
            <h1>WebLeonoor</h1>
        </>
    );
}

export default App;
