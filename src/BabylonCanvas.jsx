// BabylonScene.jsx

import React, { useRef, useEffect } from 'react';
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, MeshBuilder, SceneLoader, StandardMaterial, Texture } from '@babylonjs/core';
import '@babylonjs/loaders';

export default function BabylonScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const engine = new Engine(canvasRef.current, true);
    const scene = new Scene(engine);

    const camera = new ArcRotateCamera('camera', 0, Math.PI / 2, 2, Vector3.Zero(), scene);
    camera.attachControl(canvasRef.current, true);

 // Set the camera movement speed
 camera.speed = 0.01; // Adjust this value to control the movement speed



    const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);

    // Load GLB file
    SceneLoader.ImportMesh('', './torus.glb', '', scene, function (meshes) {
      console.log('Loaded meshes:', meshes);
      // Apply texture to the model
      const material = new StandardMaterial('material', scene);
      const texture = new Texture('./texture3.jpg', scene);
      material.diffuseTexture = texture;
      meshes.forEach(mesh => {
        mesh.material = material;
      });
    });

    SceneLoader.ImportMesh('', './sprnil.glb', '', scene, function (meshes) {
      console.log('Loaded meshes:', meshes);
      // Apply texture to the model
      const material = new StandardMaterial('material', scene);
      const texture = new Texture('./texture6.jpg', scene);
      material.diffuseTexture = texture;
      meshes.forEach(mesh => {
        mesh.material = material;
      });
    });










    engine.runRenderLoop(() => {
      scene.render();
    });

    return () => {
      scene.dispose();
      engine.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100vh' }} />;
}
