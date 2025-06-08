import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { Model } from './Sofa';

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
    <group ref={meshRef} scale={1.5}>
      <Model />  
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 pointer-events-none ">
      <Canvas shadows gl={{ antialias: true }}>
        <PerspectiveCamera makeDefault position={[0, 2, 6]} />
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
        <ambientLight intensity={10.3} />
        <pointLight position={[10, 10, 10]} intensity={10.8} />
        <spotLight position={[-10, 10, -10]} angle={0.3} penumbra={1} intensity={0.8} castShadow />
        <spotLight position={[0, 2, -5]} angle={0.5} penumbra={0.5} intensity={1.5} castShadow color="#ffffff" />
        <Sofa />
      </Canvas>
    </div>
  );
}
