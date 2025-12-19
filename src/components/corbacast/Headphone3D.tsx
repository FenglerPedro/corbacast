import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PresentationControls,
  Float,
  Environment,
  ContactShadows,
  useGLTF
} from "@react-three/drei";
import * as THREE from "three";

// Procedural Headphone Model Component
const HeadphoneModel = (props: any) => {
  const group = useRef<THREE.Group>(null);

  // Animate the float rotation slightly
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  const materials = {
    plastic: new THREE.MeshStandardMaterial({
      color: "#1a1a2e",
      roughness: 0.5,
      metalness: 0.1
    }),
    cushion: new THREE.MeshStandardMaterial({
      color: "#0f0f1a",
      roughness: 0.8,
      metalness: 0.0
    }),
    metal: new THREE.MeshStandardMaterial({
      color: "#e0e0e0",
      roughness: 0.2,
      metalness: 0.8
    }),
    accent: new THREE.MeshStandardMaterial({
      color: "#ff4757",
      roughness: 0.2,
      metalness: 0.4,
      emissive: "#ff4757",
      emissiveIntensity: 0.2
    })
  };

  return (
    <group ref={group} {...props} dispose={null}>
      {/* HEADBAND */}
      <group position={[0, 1.8, 0]}>
        {/* Main Arc */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <torusGeometry args={[1.3, 0.15, 16, 64, Math.PI]} />
          <primitive object={materials.plastic} />
        </mesh>

        {/* Inner Padding */}
        <mesh position={[0, -0.02, 0]} rotation={[0, 0, 0]}>
          <torusGeometry args={[1.3, 0.12, 16, 64, Math.PI]} />
          <primitive object={materials.cushion} />
        </mesh>
      </group>

      {/* LEFT SIDE */}
      <group position={[-1.35, 0.6, 0]}>
        {/* Connector Arm */}
        <mesh position={[0, 0.6, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 1.4, 32]} />
          <primitive object={materials.metal} />
        </mesh>

        {/* Ear Cup Holder (Yoke) */}
        <group position={[0, -0.2, 0]}>
          {/* Simplified Yoke illustration */}
          <mesh position={[0, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.08, 0.08, 0.5, 16]} />
            <primitive object={materials.plastic} />
          </mesh>
          <mesh position={[-0.25, -0.2, 0]} rotation={[0, 0, 0]}>
            <capsuleGeometry args={[0.08, 0.6, 4, 8]} />
            <primitive object={materials.plastic} />
          </mesh>
          <mesh position={[0.25, -0.2, 0]} rotation={[0, 0, 0]}>
            <capsuleGeometry args={[0.08, 0.6, 4, 8]} />
            <primitive object={materials.plastic} />
          </mesh>
        </group>

        {/* Ear Cup */}
        <group position={[0, -0.6, 0]} rotation={[0, 0, -0.1]}>
          {/* Housing */}
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.7, 0.7, 0.4, 32]} />
            <primitive object={materials.plastic} />
          </mesh>

          {/* Outer Plate */}
          <mesh position={[-0.21, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.65, 0.7, 0.05, 32]} />
            <primitive object={materials.plastic} />
          </mesh>

          {/* Accent Ring */}
          <mesh position={[-0.21, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
            <torusGeometry args={[0.5, 0.02, 16, 32]} />
            <primitive object={materials.accent} />
          </mesh>

          {/* Cushion */}
          <mesh position={[0.2, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
            <torusGeometry args={[0.55, 0.2, 16, 64]} />
            <primitive object={materials.cushion} />
          </mesh>

          {/* Inner mesh */}
          <mesh position={[0.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.5, 0.5, 0.05, 32]} />
            <meshStandardMaterial color="#000000" />
          </mesh>
        </group>
      </group>

      {/* RIGHT SIDE (Mirrored) */}
      <group position={[1.35, 0.6, 0]}>
        {/* Connector Arm */}
        <mesh position={[0, 0.6, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 1.4, 32]} />
          <primitive object={materials.metal} />
        </mesh>

        {/* Ear Cup Holder (Yoke) */}
        <group position={[0, -0.2, 0]}>
          <mesh position={[0, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.08, 0.08, 0.5, 16]} />
            <primitive object={materials.plastic} />
          </mesh>
          <mesh position={[-0.25, -0.2, 0]} rotation={[0, 0, 0]}>
            <capsuleGeometry args={[0.08, 0.6, 4, 8]} />
            <primitive object={materials.plastic} />
          </mesh>
          <mesh position={[0.25, -0.2, 0]} rotation={[0, 0, 0]}>
            <capsuleGeometry args={[0.08, 0.6, 4, 8]} />
            <primitive object={materials.plastic} />
          </mesh>
        </group>

        {/* Ear Cup */}
        <group position={[0, -0.6, 0]} rotation={[0, 0, 0.1]}>
          {/* Housing */}
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.7, 0.7, 0.4, 32]} />
            <primitive object={materials.plastic} />
          </mesh>

          {/* Outer Plate */}
          <mesh position={[0.21, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.65, 0.7, 0.05, 32]} />
            <primitive object={materials.plastic} />
          </mesh>

          {/* Accent Ring */}
          <mesh position={[0.21, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
            <torusGeometry args={[0.5, 0.02, 16, 32]} />
            <primitive object={materials.accent} />
          </mesh>

          {/* Cushion */}
          <mesh position={[-0.2, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
            <torusGeometry args={[0.55, 0.2, 16, 64]} />
            <primitive object={materials.cushion} />
          </mesh>

          {/* Inner mesh */}
          <mesh position={[-0.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.5, 0.5, 0.05, 32]} />
            <meshStandardMaterial color="#000000" />
          </mesh>
        </group>
      </group>
    </group>
  );
};

const Headphone3D = () => {
  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center relative cursor-grab active:cursor-grabbing touch-none">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 10], fov: 45 }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Environment preset="city" />

        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, -0.3, 0]} // Initial rotation
          polar={[-Math.PI / 3, Math.PI / 3]} // Expanded vertical limits
          azimuth={[-Infinity, Infinity]} // Full 360 horizontal rotation
        >
          <Float
            speed={2}
            rotationIntensity={0.5}
            floatIntensity={1}
            floatingRange={[-0.1, 0.1]}
          >
            <HeadphoneModel scale={1.3} position={[0, -1, 0]} />
          </Float>
        </PresentationControls>

        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.4}
          scale={10}
          blur={2.5}
          far={4}
        />
      </Canvas>
    </div>
  );
};

export default Headphone3D;
