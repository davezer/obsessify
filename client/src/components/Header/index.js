import React, { useState } from 'react';
import Navigation from '../Nav/index';
import MyCollection from '../MyCollection/index';
import Landing from '../Landing/index';


function Header() {
    const [currentPage, handlePageChange] = useState('Landing');
    
    const renderPage = () => {
        switch(currentPage) {
            case "Landing":
                return <Landing></Landing>
            case "MyCollection":
                return <MyCollection></MyCollection>
            
            default:
                return "Landing";
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