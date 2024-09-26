import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import './comp.css'


const Model = () => {
  const { scene } = useGLTF('./scene.gltf'); 
  return (
    <primitive 
      object={scene} 
      scale={0.75}
      position={[0, -3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
    />
  );
};

const ModelViewer = () => {
  return (
    <Canvas 
      id="3d-canvas" 
      data-engine="three.js r168"
      frameloop="demand" 
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2}
          enablePan={false}
        />
        <spotLight
          intensity={1}
          groundColor="black" 
          skyColor="white" 
          position={[0, 0, 5]} 
        />
        {/* Lighting Setup */}
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <rectAreaLight 
          width={5} 
          height={5} 
          color={'#ffffff'} 
          intensity={1} 
          position={[0, 0, 5]} 
        />
        <hemisphereLight 
          intensity={1} 
          groundColor="black" 
          skyColor="white" 
          position={[0, 0, 5]} 
        />
        
        <Model />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ModelViewer;
