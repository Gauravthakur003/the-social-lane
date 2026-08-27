import { Float, RoundedBox, Text } from "@react-three/drei";

function FloatingCard({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  title = "SOCIAL",
  subtitle = "Creative Experience",
}) {
  return (
    <Float
      speed={1.4}
      rotationIntensity={0.35}
      floatIntensity={0.8}
    >
      <group
        position={position}
        rotation={rotation}
      >
        {/* Card */}
        <RoundedBox
          args={[2.5, 1.5, 0.12]}
          radius={0.12}
          smoothness={5}
        >
          <meshPhysicalMaterial
            transparent
            opacity={0.16}
            roughness={0.2}
            metalness={0.15}
            transmission={0.25}
            thickness={0.5}
          />
        </RoundedBox>

        {/* Border */}
        <RoundedBox
          args={[2.54, 1.54, 0.08]}
          radius={0.13}
          smoothness={5}
        >
          <meshBasicMaterial
            transparent
            opacity={0.08}
            wireframe
          />
        </RoundedBox>

        {/* Title */}
        <Text
          position={[0, 0.22, 0.08]}
          fontSize={0.22}
          letterSpacing={0.08}
          anchorX="center"
          anchorY="middle"
        >
          {title}
        </Text>

        {/* Subtitle */}
        <Text
          position={[0, -0.2, 0.08]}
          fontSize={0.11}
          color="#9ca3af"
          anchorX="center"
          anchorY="middle"
        >
          {subtitle}
        </Text>
      </group>
    </Float>
  );
}

export default FloatingCard;