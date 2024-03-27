import React, { useState } from 'react';
import MenuCanvas from './MenuCanvas';


function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className="menuIcon" onClick={toggleMenu}>Menu click</div>
            <div className={`navBackground ${isMenuOpen ? 'show' : ''}`}  >
            <div className="canvas">
                    <MenuCanvas />
                </div>
             
              <div className='navCanvas flex items-center justify-center h-screen w-screen'>
                    <ul className="flex flex-col">
                        <li className="my-4 text-7xl text-left" onMouseEnter={() => handleMenuItemHover('Home')}>Home</li>
                        <li className="my-4 text-7xl"  onMouseEnter={() => handleMenuItemHover('About me')}>About me</li>
                        <li className="my-4 text-7xl" onMouseEnter={() => handleMenuItemHover('My journey')}>My journey</li>
                        <li className="my-4 text-7xl">Portfolio</li>
                        <li className="my-4 text-7xl">Contact me</li>
                    </ul>
                </div>
              
            </div>
        </div>
    );
}

export default Navigation;
