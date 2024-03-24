import React from 'react';
import { Canvas } from '@react-three/fiber'
import { CustomeShape } from './CustomeShape';


export default function MenuCanvas() {
  return (
    <>
      <Canvas style={{ height: "100vh", width: "100vw", backgroundColor: "red", }}>
        <CustomeShape />
      </Canvas>
    </>
  )
}