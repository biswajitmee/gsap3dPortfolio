import React, { useRef, useEffect } from 'react';
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, SceneLoader, StandardMaterial, Texture } from '@babylonjs/core';
import '@babylonjs/loaders';

function BabylonScene() {
  const canvasRef = useRef(null);
  let engine, scene, mesh1, mesh2;

  useEffect(() => {
    const initializeScene = () => {
      engine = new Engine(canvasRef.current, true);
      scene = new Scene(engine);

      const camera = new ArcRotateCamera('camera', 10, Math.PI / 2, 5, Vector3.Zero(), scene);
      camera.attachControl(canvasRef.current, true);

       // Disable camera rotation
       camera.inputs.removeByType("ArcRotateCameraPointersInput");


      const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);

      // Load GLB files
      SceneLoader.ImportMesh('', './shape1.glb', '', scene, function (meshes) {
        console.log('Loaded meshes:', meshes);
        const material = new StandardMaterial('material', scene);
        const texture = new Texture('./texture3.jpg', scene);
        material.diffuseTexture = texture;
        meshes.forEach(mesh => {
          mesh.material = material;
          mesh1 = mesh;
          mesh.position = new Vector3(-3, -0.5, 0); // Adjust position as needed
          mesh.scaling = new Vector3(0.3, 0.3, 0.3); // Adjust scale as needed
        });
      });

      SceneLoader.ImportMesh('', './sprnil.glb', '', scene, function (meshes) {
        console.log('Loaded meshes:', meshes);
        const material = new StandardMaterial('material', scene);
        const texture = new Texture('./texture6.jpg', scene);
        material.diffuseTexture = texture;
        meshes.forEach(mesh => {
          mesh.material = material;
          mesh2 = mesh;
          mesh.position = new Vector3(-1, 0, 0); // Adjust position as needed
          mesh.scaling = new Vector3(0.5, 0.5, 0.5); // Adjust scale as needed
        });
      });

      engine.runRenderLoop(() => {
        scene.render();
      });
    };

    const moveMeshWithCursor = (event) => {
      if (mesh1 && mesh2) {
        const rect = canvasRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        mesh1.position.x = (x / rect.width - 0.5) * 10;
        mesh1.position.y = -(y / rect.width - 0.5) * 10;

        mesh2.position.x = (x / rect.width - 0.5) * 10;
        mesh2.position.y = +(y / rect.height - 0.5) * 10;
      }
    };

    if (canvasRef.current) {
      initializeScene();
      canvasRef.current.addEventListener('mousemove', moveMeshWithCursor);
    }

    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeEventListener('mousemove', moveMeshWithCursor);
      }
      if (scene) {
        scene.dispose();
        engine.dispose();
        scene = null;
        engine = null;
      }
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh' }} />;
}

export default BabylonScene;
