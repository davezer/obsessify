import React, { useState } from 'react';
// import { Route, Switch } from 'react-router-dom';
import Navigation from '../Nav/';
import Collection from '../Collection/';
import About from '../About/';
import Home from '../Home/';



function Header() {
   
    const [currentPage, handlePageChange] = useState("Home");
    const renderPage = () => {
        switch(currentPage) {

            case "Home":
                return <Home></Home>
            
            case "Collection":
                return <Collection></Collection>
            case "About":
                return <About></About>
            
            default:
                return <Home />;
        }
    };

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>
                {
                    renderPage()
                }
            </div>
        </div>
    );

}


export default Header;