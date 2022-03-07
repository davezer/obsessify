import React, { useState } from 'react';
import Navigation from '../Nav/index';
import Collection from '../MyCollection/index';
import About from '../About/index';


function Header() {
    const [currentPage, handlePageChange] = useState('Landing');
    
    const renderPage = () => {
        switch(currentPage) {
            case "About":
                return <About></About>
            case "Collection":
                return <Collection></Collection>
            
            default:
                return <About />;
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