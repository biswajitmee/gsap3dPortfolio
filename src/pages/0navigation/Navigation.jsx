import React, { useState } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Sprnil } from './Sprnil';
import { Earth } from './Earth';

import vertexShader from './vertexShaderG.glsl';
import fragmentShader from './fragmentShaderG.glsl';
import { Cycle } from './Cycle';
import { Camera } from './Camera';
import { Globals } from 'react-spring';
import { GlobeSimple } from './GlobeSimple';

const uniforms = {
    topColor: { value: new THREE.Color(0xff0000) },
    bottomColor: { value: new THREE.Color(0x0000ff) },
  };


function Navigation() {
    const [sprnilPosition, setSprnilPosition] = useState([0, 0, 0]);
    const [sprnilScale, setSprnilScale] = useState([0.2, 0.2, 0.2]);
    const [earthPosition, setEarthPosition] = useState([0, 0, 0]);
    const [earthScale, setEarthScale] = useState([0.2, 0.2, 0.2]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuItemHover = (menuItem) => {
        switch (menuItem) {
            case 'home':
                setSprnilPosition([-6, 0, 0]);
                setSprnilScale([0.4, 0.4, 0.4]);

                setEarthPosition([0, 0, -2]);
                setEarthScale([0.2, 0.2, 0.2]);
                break;
            case 'Aboutme':
                setSprnilPosition([-1, 2, 1]);
                setSprnilScale([0.2, 0.2, 0.2]);

                setEarthPosition([-1, 0, 1]);
                setEarthScale([0.2, 0.2, 0.2]);
                break;
            default:
                // Reset positions and scales for other menu items
                setSprnilPosition([0, 0, 0]);
                setSprnilScale([0.2, 0.2, 0.2]);
                setEarthPosition([0, 0, 0]);
                setEarthScale([0.2, 0.2, 0.2]);
                break;
        }
    };

    return (
        <div>
            <div className="menuIcon" onClick={() => setIsMenuOpen(!isMenuOpen)}>Menu click</div>
            <div className={`navBackground ${isMenuOpen ? 'show' : ''}`}>
                <div className="canvas">
                    <Canvas
                        style={{ height: '100vh', width: '100vw', backgroundColor: "#fff" }}
                    >
                        <ambientLight intensity={10} />


                        {/* <Sprnil position={sprnilPosition} scale={sprnilScale} /> */}

                        <Sprnil  position={sprnilPosition} 
                                scale={sprnilScale}
                                uniforms={uniforms}
                                vertexShader={vertexShader}
                                fragmentShader={fragmentShader}  />

                                <Cycle position={[-3,0,0]} />

                                <Camera position={[4,0,0]} scale={[0.03,0.03,0.03]} />
 <GlobeSimple  position={[-3,0,0]}  scale={[0.9,0.9,0.9]} />
                        <Earth position={earthPosition} scale={earthScale} />
                        <PerspectiveCamera />
                        <OrbitControls />
                    </Canvas>
                </div>
                {/* <div className='navCanvas flex items-center justify-center h-screen w-screen'>
                    <ul className="flex flex-col">
                        <li className="nav-item my-4 text-7xl text-left" onMouseEnter={() => handleMenuItemHover('home')}>Home</li>
                        <li className="nav-item my-4 text-7xl" onMouseEnter={() => handleMenuItemHover('Aboutme')}>About me</li>
                        <li className="nav-item my-4 text-7xl">My journey</li>
                        <li className="nav-item my-4 text-7xl">Portfolio</li>
                        <li className="nav-item my-4 text-7xl">Contact me</li>
                    </ul>
                </div> */}
            </div>
        </div>
    );
}

export default Navigation;
