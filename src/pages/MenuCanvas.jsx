import React from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
 

import vertexShader from './vertexShaderG.glsl';
import fragmentShader from './fragmentShaderG.glsl';

const Cylinder  = () => { 

  return (
    <mesh>
    <cylinderGeometry args={[1, 1, 2, 32]} />
    <shaderMaterial
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={{
        topColor: { value: new THREE.Color(0xff0000) },
        bottomColor: { value: new THREE.Color(0x0000ff) },
      }}
    />
  </mesh>
  );
};

const MenuCanvas = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <Cylinder    />
 <OrbitControls />
    </Canvas>
  );
};

export default MenuCanvas;
