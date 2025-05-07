import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Cube = () => {
  return (
    <mesh castShadow receiveShadow rotation={[0.4, 0.4, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#4B5563" />
    </mesh>
  );
};

const ChairDisplay = () => {
  return (
    // <div className="relative w-full h-full min-h-[400px] bg-gray-100">
      <Canvas shadows camera={{ position: [4, 4, 4], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Cube />
        <OrbitControls />
      </Canvas>
    // </div>
  );
};

export default ChairDisplay;
