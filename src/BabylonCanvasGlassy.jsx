// BabylonScene.jsx

import React, { useRef, useEffect } from 'react';
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, MeshBuilder, SceneLoader, StandardMaterial, Color3 } from '@babylonjs/core';
import '@babylonjs/loaders';

export default function BabylonScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const engine = new Engine(canvasRef.current, true);
    const scene = new Scene(engine);

    const camera = new ArcRotateCamera('camera', 0, Math.PI / 2, 15, Vector3.Zero(), scene);
    camera.attachControl(canvasRef.current, true);

    const light = new HemisphericLight('light', new Vector3(2, 1, 0), scene);

    // Load GLB file
    SceneLoader.ImportMesh('', './sprnil.glb', '', scene, function (meshes) {
      console.log('Loaded meshes:', meshes);

      // Apply glass-like effect to the model
      meshes.forEach(mesh => {
        const glassMaterial = new StandardMaterial('glassMaterial', scene);
        glassMaterial.alpha = 0.5; // Set alpha to control transparency
        glassMaterial.diffuseColor = new Color3(0.8, 0.2, 0.7); // Adjust color to your preference
        glassMaterial.specularColor = new Color3(0.9, 0.9, 10); // Disable specular highlights
        mesh.material = glassMaterial;
      });
    } );

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
