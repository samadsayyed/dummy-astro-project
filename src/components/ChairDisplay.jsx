import React, { useState, useEffect, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { a, useSpring } from '@react-spring/three';
import * as THREE from 'three';
import { Mouse } from 'lucide-react';

const models = [
  { path: '/models/Chair.glb', name: 'Chair', scale: 0.3, position: [0, 0, 0] },
  // { path: '/models/Couch.glb', name: 'Couch', scale: 1 },
  { path: '/models/Couch Large.glb', name: 'Large Couch', scale: 1, position: [0, 1, 0] },
  { path: '/models/Lamp With Shade.glb', name: 'Lamp', scale: 10, position: [0, 0, 0] },
  { path: '/models/Bookcase with Books.glb', name: 'Bookcase', scale: 1.4, position: [0, 0, 0] },
];

const colors = [
  '#1F2937', // dark gray
  '#DC2626', // red
  '#059669', // green
  '#2563EB', // blue
  '#D97706', // yellow
  '#7C3AED', // purple
];

const AnimatedModel = ({ index, currentModel, direction }) => {
  const model = models[index];
  const isActive = index === currentModel;
  const { scene } = useGLTF(model.path);
  
  // Clone the scene to avoid modifying the original
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  useEffect(() => {
    return () => {
      // Cleanup geometries and materials
      clonedScene.traverse((child) => {
        if (child.isMesh) {
          child.geometry.dispose();
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach(material => material.dispose());
            } else {
              child.material.dispose();
            }
          }
        }
      });
    };
  }, [clonedScene]);

  const { position, scale, opacity, rotation } = useSpring({
    position: isActive 
      ? [model.position[0], model.position[1], model.position[2]]
      : [direction * 10, model.position[1], model.position[2]],
    scale: isActive ? model.scale : model.scale * 0.5,
    opacity: isActive ? 1 : 0,
    rotation: isActive ? [0, 0.4 + Math.sin(Date.now() * 0.001) * 0.1, 0] : [0, 0, 0],
    config: { tension: 170, friction: 26 },
  });

  return (
    <a.group 
      position={position}
      scale={scale} 
      rotation={rotation}
      visible={isActive}
    >
      <primitive 
        object={clonedScene} 
        castShadow 
        receiveShadow
      />
    </a.group>
  );
};

const ModelViewer = () => {
  const [currentModel, setCurrentModel] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [slideDirection, setSlideDirection] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Add lighting configuration for each model
  const modelLighting = {
    'Bookcase': {
      spotLight1: { position: [3, 5, 3], intensity: 1.5 },
      spotLight2: { position: [-3, 5, 3], intensity: 1.5 },
      ambientIntensity: 0.9
    },
    'Lamp': {
      spotLight1: { position: [2, 4, 2], intensity: 2 },
      spotLight2: { position: [-2, 4, 2], intensity: 2 },
      ambientIntensity: 0.8
    },
    'default': {
      spotLight1: { position: [5, 5, 5], intensity: 2.2 },
      spotLight2: { position: [-5, 5, 5], intensity: 4.8 },
      ambientIntensity: 0.5
    }
  };

  const currentLighting = modelLighting[models[currentModel].name] || modelLighting.default;
  
  useEffect(() => {
    const handleWheel = (e) => {
      if (!isHovered) return;
      e.preventDefault();
      
      setIsScrolling(true);
      setSlideDirection(e.deltaY > 0 ? 1 : -1);
      
      setCurrentModel((prev) =>
        e.deltaY > 0 ? (prev + 1) % models.length : (prev - 1 + models.length) % models.length
      );

      // Reset scrolling state after animation
      setTimeout(() => {
        setIsScrolling(false);
      }, 2000); // Match this with your animation duration
    };

    const rotationInterval = setInterval(() => {
      setRotation(prev => prev + 0.0002);
    }, 16);

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearInterval(rotationInterval);
    };
  }, [isHovered]);

  return (
    <div
      className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 45 }}>
        {/* <color attach="background" args={["#f8fafc"]} /> */}
        <fog attach="fog" args={["#000", 8, 20]} />
        
        <ambientLight intensity={currentLighting.ambientIntensity} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <spotLight 
          position={currentLighting.spotLight1.position}
          intensity={currentLighting.spotLight1.intensity}
          castShadow 
          angle={0.5}
          penumbra={1}
        />
        <spotLight 
          position={currentLighting.spotLight2.position}
          intensity={currentLighting.spotLight2.intensity}
          castShadow 
          angle={0.5}
          penumbra={1}
        />
        <hemisphereLight intensity={0.3} />
        
        <group rotation-y={rotation} position={[0, -2, 0]}>
          {models.map((_, index) => (
            <AnimatedModel 
              key={index} 
              index={index} 
              currentModel={currentModel} 
              direction={slideDirection}
            />
          ))}
        </group>
        
        {/* Ground plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
          {/* <planeGeometry args={[50, 50]} /> */}
          <meshStandardMaterial 
            color="#f1f5f9"
            metalness={0.1}
            roughness={0.8}
            transparent
            opacity={0.8}
          />
        </mesh>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>

      {/* <div className="absolute bottom-0 left-0 right-0 py-6 px-8 ">
        <div className="text-white text-center font-medium drop-shadow-lg">
          <div className="text-2xl mb-2">
            {models[currentModel].name}
          </div>
          <div className="flex justify-center gap-2">
            {models.map((_, i) => (
              <button 
                key={i} 
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentModel ? 'bg-white scale-125' : 'bg-white/50'
                }`}
                onClick={() => {
                  setSlideDirection(i > currentModel ? 1 : -1);
                  setCurrentModel(i);
                }}
              />
            ))}
          </div>
        </div>
      </div> */}
      
      {isHovered && !isScrolling && (
        <div className="absolute animate-pulse-scale top-1 right-1 bg-black/30 backdrop-blur-sm text-white px-4 py-3 rounded-full flex items-center justify-center">
          <div className="">
            <Mouse size={20} className="opacity-90" />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes pulse-scale {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-pulse-scale {
          animation: pulse-scale 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ModelViewer;