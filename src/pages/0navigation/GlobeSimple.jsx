
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function GlobeSimple(props) {
  const { nodes, materials } = useGLTF('/globSimple.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={nodes.Icosphere.material}
      />
    </group>
  )
}

useGLTF.preload('/globSimple.glb')
