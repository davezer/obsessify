import React, { useState } from 'react';
// import { Route, Switch } from 'react-router-dom';
import Navigation from '../Nav/index.js';
import Collection from '../MyCollection/index.js';
import About from '../About/index.js';
import Home from '../Home/index.js';



function Header() {
   
    const [currentPage, handlePageChange] = useState("About");
     console.log(currentPage)
    const renderPage = () => {
        switch(currentPage) {

            case "Home":
                return <Home></Home>
            case "About":
                return <About></About>
            case "Collection":
                return <Collection></Collection>
            
            
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

// function Header({ children }) {
//     return (
//       <div
//         style={{ height: 560, clear: "both", paddingTop: 120, textAlign: "center" }}
//       >
//         {children}
//       </div>
//     );
//   }
  

export default Header;