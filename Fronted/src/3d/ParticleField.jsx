import { useMemo } from "react";
import * as THREE from "three";
import { Points } from "@react-three/drei";

function createSeededRandom(seed) {
  let value = seed % 2147483647;

  if (value <= 0) {
    value += 2147483646;
  }

  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

function ParticleField({
  count = 1200,
  radius = 8,
}) {
  const positions = useMemo(() => {
    const data = new Float32Array(count * 3);
    const random = createSeededRandom(
      Math.round(radius * 1000) + count * 17
    );

    for (let i = 0; i < count; i++) {
      const radiusValue = radius * Math.cbrt(random());
      const theta = random() * Math.PI * 2;
      const phi = Math.acos(2 * random() - 1);

      data[i * 3] =
        radiusValue *
        Math.sin(phi) *
        Math.cos(theta);

      data[i * 3 + 1] =
        radiusValue *
        Math.sin(phi) *
        Math.sin(theta);

      data[i * 3 + 2] =
        radiusValue *
        Math.cos(phi);
    }

    return data;
  }, [count, radius]);

  return (
    <Points
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <pointsMaterial
        size={0.025}
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default ParticleField;