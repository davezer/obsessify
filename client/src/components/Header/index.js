import React, { useState } from 'react';
import Navigation from '../Nav/index';
import MyCollection from '../MyCollection';


function Header() {
    const [currentPage, handlePageChange] = useState('MyCollection');
    
    const renderPage = () => {
        switch(currentPage) {
            case "MyCollection":
                return <MyCollection></MyCollection>
            
            default:
                return currentPage;
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