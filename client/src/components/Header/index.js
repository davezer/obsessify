import React, { useState } from 'react';


function Header() {
    const [currentPage, handlePageChange] = useState('Header');
    
    const renderPage = () => {
        switch(currentPage) {
            
        }
    };

    return (
        <div>
            {/* <Navigation currentPage={currentPage} handlePageChange={handlePageChange} /> */}
            <div>
                {
                    renderPage()
                }
            </div>
        </div>
    );

}

export default Header;