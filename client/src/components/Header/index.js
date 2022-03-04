import React, { useState } from 'react';
import MyCollection from '../MyCollection';


function Header() {
    const [currentPage, handlePageChange] = useState('Header');
    
    const renderPage = () => {
        switch(currentPage) {
            // case 'MyCollection':
            //     return <MyCollection></MyCollection>
            // default:
            //     return <MyCollection></MyCollection>
        }
    };

    return (
        <div>
            {/* <Navigator currentPage={currentPage} handlePageChange={handlePageChange} /> */}
            <div>
                {
                    renderPage()
                }
            </div>
        </div>
    );

}

export default Header;