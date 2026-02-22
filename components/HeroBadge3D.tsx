import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera, Torus } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);

  useFrame((state, delta) => {
    timeRef.current += delta;
    const time = timeRef.current;
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.5;
      meshRef.current.rotation.y = time * 0.8;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = time * 1.2;
      ringRef.current.rotation.x = time * 0.3;
    }
  });

  return (
    <group>
      <Float speed={5} rotationIntensity={2} floatIntensity={2}>
        <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.2}>
          <MeshDistortMaterial
            color="#00E5FF"
            speed={4}
            distort={0.4}
            radius={1}
            metalness={0.9}
            roughness={0.1}
            emissive="#003A76"
            emissiveIntensity={0.5}
          />
        </Sphere>
      </Float>
      <Torus ref={ringRef} args={[1.6, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={2} transparent opacity={0.6} />
      </Torus>
    </group>
  );
};

const HeroBadge3D: React.FC = () => {
  return (
    <div className="w-24 h-24 md:w-32 md:h-32 relative group">
      <div className="absolute inset-0 bg-bold-acid/20 rounded-full blur-2xl group-hover:bg-bold-acid/40 transition-colors duration-500" />
      <Canvas className="w-full h-full" gl={{ alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00E5FF" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#2563EB" />
        <spotLight position={[0, 5, 0]} intensity={1.5} color="#ffffff" />
        <AnimatedShape />
      </Canvas>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-white font-display text-[10px] md:text-[12px] font-black tracking-widest drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]">
          ROI
        </span>
      </div>
    </div>
  );
};

export default HeroBadge3D;
