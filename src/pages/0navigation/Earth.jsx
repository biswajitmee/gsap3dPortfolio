
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Earth(props) {
  const { nodes, materials } = useGLTF('/earth.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.earth4_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.earth4_lambert1_0.geometry}
        material={materials.lambert1}
      />
    </group>
  )
}

useGLTF.preload('/earth.glb')