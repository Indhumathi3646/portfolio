import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useMemo } from "react";
import "./galaxy.css";
import Nav from "../Navbar/Nav";
import Navbar from "../protfolio/navbar";

function Starfield() {
  const starRef = useRef(null);

  const positions = useMemo(() => {
    const starCount = 2000;
    const arr = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 50; 
    }
    return arr;
  }, []);

  useFrame(() => {
    if (starRef.current) {
      starRef.current.rotation.y += 0.008;
    }
  });

  return (
    <points ref={starRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#9ca3af" />
    </points>
  );
}

export default function FloatingBackground() {
  return (
    // <div className="par">
      <div id="hello">
        <Navbar/>
        <Nav/>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={2} />
          <Starfield />
        </Canvas>
      </div>
    // </div>
  );
}
