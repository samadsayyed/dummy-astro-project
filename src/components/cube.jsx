import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function ThreeScene() {
  return (
    <div className=" h-screen" style={{ width: "100vw", height: "100vh",position:"absolute" ,backgroundColor:"black"}}>
    <Canvas style={{ width: "100%", height: "400px" }}>
      {/* Add Camera Controls */}
      {/* <OrbitControls /> */}
      
      {/* Add a Simple Box */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>

      {/* Add Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
    </Canvas>
    </div>
  );
}
