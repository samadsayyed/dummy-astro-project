import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, useMotionValueEvent } from 'framer-motion';

function Sofa() {
  const meshRef = useRef();
  const [scrollContainer, setScrollContainer] = useState(null);

  useEffect(() => {
    // Ensure this runs only in the browser
    setScrollContainer(document.getElementById('scroll-container'));
  }, []);

  const { scrollYProgress } = useScroll({ container: scrollContainer });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest, "Scroll progress");
  });

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = scrollYProgress.get() * Math.PI * 2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 0.5, 1.5]} />
        <meshStandardMaterial color="#FCD34D" metalness={0.1} roughness={0.8} />
      </mesh>
      {/* Backrest */}
      <mesh position={[0, 0.75, -0.6]}>
        <boxGeometry args={[3, 1.5, 0.3]} />
        <meshStandardMaterial color="#FCD34D" metalness={0.1} roughness={0.8} />
      </mesh>
      {/* Armrests */}
      <mesh position={[-1.5, 0.5, 0]}>
        <boxGeometry args={[0.3, 1, 1.5]} />
        <meshStandardMaterial color="#FCD34D" metalness={0.1} roughness={0.8} />
      </mesh>
      <mesh position={[1.5, 0.5, 0]}>
        <boxGeometry args={[0.3, 1, 1.5]} />
        <meshStandardMaterial color="#FCD34D" metalness={0.1} roughness={0.8} />
      </mesh>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 2, 6]} />
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, -10]} angle={0.3} penumbra={1} intensity={1} castShadow />
        <Sofa />
      </Canvas>
    </div>
  );
}
