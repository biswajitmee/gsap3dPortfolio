import React, { useState } from 'react';
import MenuCanvas from './MenuCanvas';




function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>

            <div className="menuIcon" onClick={toggleMenu}>Menu click</div>

            <div className={`navBackground ${isMenuOpen ? 'show' : ''}`}  >

                


                <div className='navCanvas flex items-center justify-center h-screen w-screen'>
                    <ul className="flex flex-col">
                        <li className="my-4 text-7xl text-left">Home</li>
                        <li className="my-4 text-7xl">About me</li>
                        <li className="my-4 text-7xl">My journey</li>
                        <li className="my-4 text-7xl">Portfolio</li>
                        <li className="my-4 text-7xl">Contact me</li>
                    </ul>
                </div>

                <div className="canvas">
                    <MenuCanvas />
                </div>

            </div>
        </div>
    );
}

export default Header;
