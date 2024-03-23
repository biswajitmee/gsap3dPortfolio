
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Icons(props) {
  const { nodes, materials } = useGLTF('/icon.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
    
        <group
          position={[234.028, -204.994, 80.339]}
          rotation={[-0.146, -0.439, -0.767]}
          scale={0.901}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus_8.geometry}
            material={nodes.Torus_8.material}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus_6.geometry}
            material={nodes.Torus_6.material}
            rotation={[0, 0, -1.833]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus_4.geometry}
            material={nodes.Torus_4.material}
            rotation={[0, 0, 2.88]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus_2.geometry}
            material={nodes.Torus_2.material}
            rotation={[0, 0, 1.309]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus_7.geometry}
            material={nodes.Torus_7.material}
            rotation={[0, 0, -Math.PI / 3]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus_5.geometry}
            material={nodes.Torus_5.material}
            rotation={[0, 0, -2.618]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus_3.geometry}
            material={nodes.Torus_3.material}
            rotation={[0, 0, 2.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus.geometry}
            material={nodes.Torus.material}
            rotation={[0, 0, Math.PI / 6]}
          />
        </group>
        <group
          position={[242.884, 65.549, -0.457]}
          rotation={[0.106, -0.043, -0.389]}
          scale={1.096}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_2.geometry}
            material={nodes.Cube_2.material}
            position={[-3.293, -21.94, 9.43]}
            rotation={[-0.004, 0.002, 2.618]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={nodes.Cube.material}
            position={[3.544, -10.06, 9.43]}
            rotation={[0, 0, -Math.PI / 6]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_3.geometry}
            material={nodes.Rectangle_3.material}
            position={[0.005, -18.081, 1.54]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_2.geometry}
            material={nodes.Rectangle_2.material}
            position={[0.265, -17.692, 0.103]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_3.geometry}
            material={nodes.Cylinder_3.material}
            position={[-0.155, 43.325, 0.605]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_2.geometry}
            material={nodes.Cylinder_2.material}
            position={[-0.155, 49.042, 0.605]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus_1.geometry}
            material={nodes.Torus_1.material}
            position={[-0.178, 67.16, 0.528]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={nodes.Cylinder.material}
            position={[0, -19.636, -4.772]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={2.408}
          />
          <group position={[0.005, -18.081, 1.54]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_10_instance_1.geometry}
              material={nodes.mesh_10_instance_1.material}
              position={[0, 40, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_10_instance_2.geometry}
              material={nodes.mesh_10_instance_2.material}
              position={[20, 34.641, 0]}
              rotation={[0, 0, -Math.PI / 6]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_10_instance_3.geometry}
              material={nodes.mesh_10_instance_3.material}
              position={[34.641, 20, 0]}
              rotation={[0, 0, -Math.PI / 3]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_10_instance_4.geometry}
              material={nodes.mesh_10_instance_4.material}
              position={[40, 0, 0]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_10_instance_5.geometry}
              material={nodes.mesh_10_instance_5.material}
              position={[34.641, -20, 0]}
              rotation={[0, 0, -2.094]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_10_instance_6.geometry}
              material={nodes.mesh_10_instance_6.material}
              position={[20, -34.641, 0]}
              rotation={[0, 0, -2.618]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_10_instance_7.geometry}
              material={nodes.mesh_10_instance_7.material}
              position={[0, -40, 0]}
              rotation={[0, 0, -Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_10_instance_8.geometry}
              material={nodes.mesh_10_instance_8.material}
              position={[-20, -34.641, 0]}
              rotation={[0, 0, 2.618]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_10_instance_9.geometry}
              material={nodes.mesh_10_instance_9.material}
              position={[-34.641, -20, 0]}
              rotation={[0, 0, 2.094]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_10_instance_10.geometry}
              material={nodes.mesh_10_instance_10.material}
              position={[-40, 0, 0]}
              rotation={[0, 0, Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_10_instance_11.geometry}
              material={nodes.mesh_10_instance_11.material}
              position={[-34.641, 20, 0]}
              rotation={[0, 0, Math.PI / 3]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_10_instance_12.geometry}
              material={nodes.mesh_10_instance_12.material}
              position={[-20, 34.641, 0]}
              rotation={[0, 0, Math.PI / 6]}
            />
          </group>
          <group position={[0.265, -17.692, 0.103]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_11_instance_1.geometry}
              material={nodes.mesh_11_instance_1.material}
              position={[0, 40, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_11_instance_2.geometry}
              material={nodes.mesh_11_instance_2.material}
              position={[40, 0, 0]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_11_instance_3.geometry}
              material={nodes.mesh_11_instance_3.material}
              position={[0, -40, 0]}
              rotation={[0, 0, -Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_11_instance_4.geometry}
              material={nodes.mesh_11_instance_4.material}
              position={[-40, 0, 0]}
              rotation={[0, 0, Math.PI / 2]}
            />
          </group>
        </group>
        <group
          position={[-185.855, 4.327, 385.944]}
          rotation={[-0.152, -0.571, 0.333]}
          scale={1.208}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_2_1.geometry}
            material={nodes.Rectangle_2_1.material}
            position={[3.403, 20.39, 24.575]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_2_1.geometry}
            material={nodes.Cylinder_2_1.material}
            position={[62.727, 56.828, 7.856]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1.geometry}
            material={nodes.Cylinder_1.material}
            position={[-59.245, 56.828, 7.856]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ellipse_8.geometry}
            material={nodes.Ellipse_8.material}
            position={[64.767, 29.28, 28.536]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ellipse_7.geometry}
            material={nodes.Ellipse_7.material}
            position={[51.914, 16.122, 28.536]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ellipse_8_1.geometry}
            material={nodes.Ellipse_8_1.material}
            position={[38.451, 29.28, 28.536]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ellipse_4.geometry}
            material={nodes.Ellipse_4.material}
            position={[51.914, 42.438, 28.536]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_4.geometry}
            material={nodes.Rectangle_4.material}
            position={[-36.568, 29.282, 28.536]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_3_1.geometry}
            material={nodes.Rectangle_3_1.material}
            position={[-48.964, 16.886, 28.536]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_4_1.geometry}
            material={nodes.Rectangle_4_1.material}
            position={[-61.36, 29.282, 28.536]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_2_2.geometry}
            material={nodes.Rectangle_2_2.material}
            position={[-48.964, 41.678, 28.536]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ellipse_3.geometry}
            material={nodes.Ellipse_3.material}
            position={[51.609, 28.678, 27.456]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ellipse_2.geometry}
            material={nodes.Ellipse_2.material}
            position={[-48.932, 28.678, 27.456]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ellipse_3_1.geometry}
            material={nodes.Ellipse_3_1.material}
            position={[51.609, 28.678, 26.381]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ellipse.geometry}
            material={nodes.Ellipse.material}
            position={[-48.932, 28.678, 26.381]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_1.geometry}
            material={nodes.Cube_1.material}
            position={[-0.019, 26.935, -4.206]}
          />
        </group>
        <group position={[2.332, 267.99, 66.946]} rotation={[-0.069, 0.041, 0.402]} scale={0.825}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_3_2.geometry}
            material={nodes.Rectangle_3_2.material}
            position={[-0.943, -8.885, -21.999]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_2_3.geometry}
            material={nodes.Rectangle_2_3.material}
            position={[48.373, 20.391, 12.125]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ellipse_1.geometry}
            material={nodes.Ellipse_1.material}
            position={[1.5, -9.742, 26.546]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_2.geometry}
            material={nodes.Cube_2.material}
            position={[0, -8.742, -7.589]}
          />
        </group>
      
      </group>
    </group>
  )
}

useGLTF.preload('/icon.glb')


