import React, { useRef, useEffect } from 'react';
import * as BABYLON from 'babylonjs';
import '@babylonjs/loaders';


export default function BabylonScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Create Babylon.js engine
    const engine = new BABYLON.Engine(canvasRef.current, true);

    // Create Babylon.js scene
    const scene = new BABYLON.Scene(engine);

    // Create camera
    const camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 5, -10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvasRef.current, true);

    // Create a light
    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);

    // Create a box
    const box = BABYLON.MeshBuilder.CreateBox('box', { size: 3 }, scene);
    box.position = new BABYLON.Vector3(3, 2, -2); // Example position: (x: 0, y: 1, z: 0)



      // Load GLB model
      BABYLON.SceneLoader.ImportMesh('', '/globSimple.glb', '', scene, function (meshes) {
        // You can perform any additional operations on the loaded meshes here
      });



    // Create a ground
   // const ground = BABYLON.MeshBuilder.CreateGround('ground', { width: 6, height: 6 }, scene);

    // Run the main render loop
    engine.runRenderLoop(() => {
      scene.render();
    });




    // Clean up Babylon.js resources on component unmount
    return () => {
      scene.dispose();
      engine.dispose();
    };
  }, []);

  return
   <canvas ref={canvasRef} style={{width:"100vw", height:"100vh"}} />;
}