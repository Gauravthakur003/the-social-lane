import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import {
  Float,
  Environment,
  MeshTransmissionMaterial,
  OrbitControls,
  Sphere,
} from "@react-three/drei";

import {
  useRef,
} from "react";

import ParticleField from "./ParticleField";
import FloatingCard from "./FloatingCard";

function CentralObject() {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x =
      state.clock.elapsedTime * 0.15;

    meshRef.current.rotation.y =
      state.clock.elapsedTime * 0.25;

    meshRef.current.position.y =
      Math.sin(
        state.clock.elapsedTime * 1.2
      ) * 0.12;
  });

  return (
    <Float
      speed={1}
      rotationIntensity={0.25}
      floatIntensity={0.35}
    >
      <mesh ref={meshRef}>
        <icosahedronGeometry
          args={[1.35, 5]}
        />

        <MeshTransmissionMaterial
          backside
          samples={8}
          resolution={512}
          thickness={1}
          roughness={0.12}
          transmission={1}
          ior={1.45}
          chromaticAberration={0.08}
          anisotropy={0.15}
          distortion={0.15}
          distortionScale={0.25}
          temporalDistortion={0.08}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

function SceneContent() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />

      <pointLight
        position={[3, 4, 4]}
        intensity={5}
        distance={12}
      />

      <pointLight
        position={[-4, -2, 3]}
        intensity={3}
        distance={10}
      />

      {/* Environment */}
      <Environment preset="city" />

      {/* Particles */}
      <ParticleField
        count={1400}
        radius={7}
      />

      {/* Main object */}
      <CentralObject />

      {/* Floating cards */}
      <FloatingCard
        position={[-2.4, 1.3, -0.8]}
        rotation={[0.05, 0.25, -0.12]}
        title="CREATIVE"
        subtitle="Ideas that move"
      />

      <FloatingCard
        position={[2.3, -1.25, -0.5]}
        rotation={[-0.08, -0.2, 0.12]}
        title="BRANDS"
        subtitle="Built for impact"
      />

      <FloatingCard
        position={[2.4, 1.5, -1]}
        rotation={[0.1, -0.25, 0.1]}
        title="DIGITAL"
        subtitle="Experience"
      />

      {/* Small sphere */}
      <Sphere
        args={[0.08, 16, 16]}
        position={[-2.6, -1.5, 0]}
      >
        <meshBasicMaterial />
      </Sphere>
    </>
  );
}

function HeroScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 7],
        fov: 45,
      }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      <SceneContent />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        enableDamping
        dampingFactor={0.05}
      />
    </Canvas>
  );
}

export default HeroScene;